const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const config = {
  'src': '',
  'dest': 'dist/',
  'minify': true,
  'sourcemaps': false
};


// HTML
function html() {
  return gulp.src('*.html')
    .pipe(browserSync.stream());
}

// Compile and autoprefix stylesheets
function styles() {
  return gulp.src(config.src + 'scss/*.scss')
    .pipe($.if(config.sourcemaps, $.sourcemaps.init()))
    .pipe($.sass({
      precision: 8,
      outputStyle: 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer()
    ]))
    .pipe($.if(config.sourcemaps, $.sourcemaps.write()))
    .pipe(gulp.dest(config.dest + 'css'))
    .pipe(browserSync.stream())
    .pipe($.if(config.minify, $.cleanCss()))
    .pipe($.if(config.sourcemaps, $.sourcemaps.write()))
    .pipe($.if(config.minify, $.rename({suffix: '.min'})))
    .pipe($.if(config.minify, gulp.dest(config.dest + 'css')))
    .pipe(browserSync.stream());
}

// Lint stylesheets
function stylelint() {
  return gulp.src(config.src + 'scss/**/*.scss')
    .pipe($.postcss([
      require('stylelint')({fix: true})
    ], {
      syntax: require('postcss-scss')
    }))
    .pipe(gulp.dest(config.src + 'scss'));
}

// Serve compiled files
function serve(done) {
  browserSync.init({
    server: true,
    notify: false,
    snippetOptions: {
      rule: {
        match: /<\/body>/i
      }
    }
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

gulp.task('build', build);
gulp.task('watch', watch);
gulp.task('lint', stylelint);
gulp.task('default', gulp.series(build, gulp.parallel(serve, watch)));
