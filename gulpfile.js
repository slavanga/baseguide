const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const log = require('fancy-log');
const fibers = require('fibers');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const config = {
  'src': '',
  'dest': 'dist/',
  'minify': true,
  'sourcemaps': false
};

sass.compiler = require('sass');


// HTML
function html() {
  return gulp.src(config.src + '*.html')
    .pipe(browserSync.stream());
}

// Compile and autoprefix stylesheets
function styles() {
  return gulp.src(config.src + 'scss/*.scss')
    .pipe($.if(config.sourcemaps, $.sourcemaps.init()))
    .pipe(sass({
      precision: 8,
      outputStyle: 'expanded',
      fiber: fibers
    }).on('error', sass.logError))
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

// Compile javascript
function scripts() {
  return gulp.src(config.src + 'js/*.js')
    .pipe($.include().on('error', function(error) {
      log.error(error.message);
      this.emit('end');
    }))
    .pipe($.if(config.sourcemaps, $.sourcemaps.init()))
    .pipe($.babel())
    .pipe($.if(config.sourcemaps, $.sourcemaps.write()))
    .pipe(gulp.dest(config.dest + 'js'))
    .pipe(browserSync.stream())
    .pipe($.if(config.minify, $.uglify().on('error', function(error) {
      log.error(error.message);
      this.emit('end');
    })))
    .pipe($.if(config.sourcemaps, $.sourcemaps.write()))
    .pipe($.if(config.minify, $.rename({suffix: '.min'})))
    .pipe($.if(config.minify, gulp.dest(config.dest + 'js')))
    .pipe(browserSync.stream());
}

// Lint javascript
function eslint() {
  return gulp.src(config.src + 'js/**/*.js')
    .pipe($.eslint({fix: true}))
    .pipe($.eslint.format())
    .pipe(gulp.dest(config.src + 'js'));
}

// Optimize images
function images() {
  return gulp.src(config.src + 'img/**/*.{gif,jpg,png,svg}')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest(config.dest + 'img'))
    .pipe(browserSync.stream());
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
  gulp.watch(config.src + 'js/**/*.js', scripts);
  gulp.watch(config.src + 'img/**/*.{gif,jpg,png,svg}', images);
  done();
}


const build = gulp.parallel(html, styles, scripts, images);

exports.build = build;
exports.watch = watch;
exports.lint = gulp.parallel(stylelint, eslint);
exports.default = gulp.series(build, gulp.parallel(serve, watch));
