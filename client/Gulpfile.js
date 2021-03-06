var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var preprocess = require('gulp-preprocess');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');	

var build_options = {
	'isDev': true
}

// external libraries, the browserify task will put these in vendor.js and omit them in app.js.
var external_libraries = [
	'jquery', 'angular', 'angular-route', 'angular-ui-router'
]

gulp.task('build:vendor', function() {
	gulp.src('./app/noop.js', {read: false})
		.pipe(browserify({
			debug: process.env.NODE_ENV != 'production'
		}))
		.on('prebundle', function(bundle) {
			external_libraries.forEach(function(lib) {
				bundle.require(lib);
			});
		})
		.pipe(rename('vendor.js'))
		.pipe(gulp.dest('./build'));
});

gulp.task('build:app', function() {
	gulp.src('./app/index.js', {read: false})
		.pipe(browserify({
			transform: [],
			debug: process.env.NODE_ENV != 'production'
		}))
		.on('prebundle', function(bundle) {
			external_libraries.forEach(function(lib) {
				bundle.external(lib);
			});
		})
		.on('error', function(err) {console.error(err)})
		.pipe(rename('app.js'))
		.pipe(gulp.dest('./build'));
});

gulp.task('move:css', function() {
    gulp.src('./app/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build'));
})

gulp.task('move:html', function() {
	gulp.src(/*'./app/index.html', */'./app/**/*.html')
		.pipe(preprocess({
			context: {NODE_ENV: process.env.NODE_ENV}
		}))
		.pipe(gulp.dest('./build'));
})

gulp.task('move', ['move:html', 'move:css']);

gulp.task('serve', function() {
	gulp.src('./build')
		.pipe(webserver({
			port: process.env.PORT || 8000,
		}));
});

gulp.task('watch', function() {
	var livereload = require('gulp-livereload');

	var watch = function(path, task) {
		gulp.watch(path, function(events) {
			console.log(events.path + ' changed. running task ' + task + '.');
			gulp.start(task);
			livereload.changed(events.path);
		}).on('change', function(file) {
		});
	}

	watch('./app/index.html', 'move:html');
	watch('./app/**/*.js', 'build:app');
	watch('./app/app.scss', 'move:css');
})

gulp.task('build', ['build:vendor', 'build:app']);

gulp.task('main', ['build', 'move']);

gulp.task('dev', function() {
	build_options.isDev = true;
	gulp.start(['main', 'watch']);
})

gulp.task('production', function() {
	build_options.isDev = false;
	gulp.start(['main']);
})

gulp.task('default', function() {
	build_options.isDev = process.env.NODE_ENV != 'production';
	console.log("running in " + (build_options.isDev ? 'development mode' : 'production mode'));
	gulp.start((build_options.isDev ? 'dev' : 'production'));
});