const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const fibers = require('fibers');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const config = {
  src: '',
  dest: 'dist/',
  minify: true,
  sourcemaps: true,
};

// HTML
function html() {
  return gulp.src(config.src + '*.html').pipe(browserSync.stream());
}

// Compile and autoprefix stylesheets
function styles() {
  return gulp
    .src(config.src + 'scss/*.scss')
    .pipe($.if(config.sourcemaps, $.sourcemaps.init()))
    .pipe(
      sass({
        outputStyle: 'expanded',
        fiber: fibers,
      }).on('error', sass.logError)
    )
    .pipe($.postcss())
    .pipe($.if(config.sourcemaps, $.sourcemaps.write('.')))
    .pipe(gulp.dest(config.dest))
    .pipe($.filter('**/*.css'))
    .pipe(browserSync.stream())
    .pipe($.if(config.minify, $.postcss([cssnano()])))
    .pipe($.if(config.minify, $.rename({ suffix: '.min' })))
    .pipe($.if(config.minify && config.sourcemaps, $.sourcemaps.write('.')))
    .pipe($.if(config.minify, gulp.dest(config.dest)))
    .pipe(browserSync.stream());
}

// Serve compiled files
function serve(done) {
  browserSync.init({
    server: true,
    notify: false,
    snippetOptions: {
      rule: {
        match: /<\/body>/i,
      },
    },
    /*
    proxy: 'example.com',
    files: config.dest,
    serveStatic: [{
      route: '', // remote path
      dir: config.dest // local path
    }],
    */
  });
  done();
}

// Watch files for changes
function watch(done) {
  gulp.watch(config.src + '*.html', html);
  gulp.watch(config.src + 'scss/**/*.scss', styles);
  done();
}

const build = gulp.parallel(html, styles);

exports.build = build;
exports.watch = watch;
exports.default = gulp.series(build, gulp.parallel(serve, watch));
