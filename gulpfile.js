var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

var config = {
	'src': './',
	'dest': 'dist/',
	'proxy': false,
	'sourcemaps': false,
	'browsers': [
		'Android 2.3',
		'Android >= 4',
		'last 4 Chrome versions',
		'Firefox ESR',
		'Edge >= 12',
		'IE >= 8',
		'iOS >= 8',
		'Safari >= 8',
		'Opera >= 15'
	]
};


// Default task: Build production files
gulp.task('default', ['html', 'styles', 'scripts', 'images']);

// HTML
gulp.task('html', function() {
	return gulp.src(config.src + '*.html')
		.pipe(browserSync.stream());
});

// Compile and autoprefix stylesheets
gulp.task('styles', function() {
	return gulp.src(config.src + 'scss/**/*.scss')
		.pipe($.if(config.sourcemaps, $.sourcemaps.init()))
		.pipe($.sass({
			precision: 8,
			outputStyle: 'expanded'
		}).on('error', function(error) {
			$.util.log($.util.colors.red(error.message));
			this.emit('end');
		}))
		.pipe($.postcss([
			autoprefixer({
				browsers: config.browsers
			})
		]))
		.pipe($.if(config.sourcemaps, $.sourcemaps.write()))
		.pipe(gulp.dest(config.dest + 'css'))
		.pipe(browserSync.stream())
		.pipe($.cleanCss({compatibility: 'ie8'}))
		.pipe($.rename({suffix: '.min'}))
		.pipe(gulp.dest(config.dest + 'css'))
		.pipe(browserSync.stream());
});

// Compile javascript
gulp.task('scripts', function() {
	return gulp.src(config.src + 'js/*.js')
		.pipe($.if(config.sourcemaps, $.sourcemaps.init()))
		.pipe($.include().on('error', function(error) {
			$.util.log($.util.colors.red(error.message));
			this.emit('end');
		}))
		.pipe($.uglify().on('error', function(error) {
			$.util.log($.util.colors.red(error.message));
			this.emit('end');
		}))
		.pipe($.if(config.sourcemaps, $.sourcemaps.write()))
		.pipe($.rename({suffix: '.min'}))
		.pipe(gulp.dest(config.dest + 'js'))
		.pipe(browserSync.stream());
});

// Optimize images
gulp.task('images', function() {
	return gulp.src(config.src + 'img/**/*')
		.pipe($.cache($.imagemin()))
		.pipe(gulp.dest(config.dest + 'img'))
		.pipe(browserSync.stream());
});

// Watch files for changes and reload
gulp.task('serve', ['default'], function() {
	var browserSyncConfig = {
		notify: false,
		snippetOptions: {
			rule: {
				match: /<\/head>/i,
			}
		}
	};

	if(config.proxy) {
		browserSyncConfig.proxy = config.proxy;
	} else {
		browserSyncConfig.server = '.';
	}

	browserSync.init(browserSyncConfig);

	gulp.watch([config.src + '*.html'], ['html']);
	gulp.watch([config.src + 'scss/**/*.scss'], ['styles']);
	gulp.watch([config.src + 'js/*.js'], ['scripts']);
	gulp.watch([config.src + 'img/**/*'], ['images']);
});
