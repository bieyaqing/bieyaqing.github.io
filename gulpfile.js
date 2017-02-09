'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var inject = require('gulp-inject');
var removeHtmlComments = require('gulp-remove-html-comments');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');

let SRC_FOLDER = "./src";
var DEST_FOLDER = ".";

gulp.task('default', function() {
	console.log("default");
});

gulp.task('build-lib', function() {
	console.log("build-lib");
	return gulp.src([
		'./node_modules/font-awesome/css/font-awesome.min.css',
		'./node_modules/font-awesome/fonts/*.eot',
		'./node_modules/font-awesome/fonts/*.svg',
		'./node_modules/font-awesome/fonts/*.ttf',
		'./node_modules/font-awesome/fonts/*.woff',
		'./node_modules/font-awesome/fonts/*.woff2',
		'./node_modules/font-awesome/fonts/*.otf',
		'./node_modules/moment/min/moment.min.js',
		'./node_modules/angular/angular.min.js',
		'./node_modules/angular/angular.min.js.map',
		'./node_modules/chart.js/dist/Chart.min.js',
		'./node_modules/angular-chart.js/dist/angular-chart.min.js'
	], {
		base: './node_modules'
	})
	.pipe(gulp.dest(DEST_FOLDER + '/lib'));
});

gulp.task('compile-sass', function() {
	console.log("compile-sass");
	return gulp.src(SRC_FOLDER + '/sass/*.scss', {
		base: SRC_FOLDER + '/sass'
	})
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(DEST_FOLDER + '/css'));
});

gulp.task('build-ori-fonts', function() {
	console.log("build-ori-fonts");
	return gulp.src(SRC_FOLDER + '/ori-fonts/**/*.*', {
		base: SRC_FOLDER + '/ori-fonts'
	})
	.pipe(gulp.dest(DEST_FOLDER + '/fonts'));
});

gulp.task('build-ori-css', function() {
	console.log("build-ori-css");
	return gulp.src(SRC_FOLDER + '/ori-css/*.css', {
		base: SRC_FOLDER + '/ori-css'
	})
	.pipe(gulp.dest(DEST_FOLDER + '/css'));
});

gulp.task('build-ori-js', function() {
	console.log("build-ori-js");
	return gulp.src(SRC_FOLDER + '/ori-js/*.js', {
		base: SRC_FOLDER + '/ori-js'
	})
	.pipe(gulp.dest(DEST_FOLDER + '/js'));
});

gulp.task('build-js', function() {
	console.log("build-js");
	return gulp.src(SRC_FOLDER + '/js/*.js', {
		base: SRC_FOLDER + '/js'
	})
	.pipe(gulp.dest(DEST_FOLDER + '/js'));
});

gulp.task('build-images', function() {
	console.log("build-images");
	return gulp.src(SRC_FOLDER + '/images/**/*.*', {
		base: SRC_FOLDER + '/images'
	})
	.pipe(imagemin())
	.pipe(gulp.dest(DEST_FOLDER + '/images'));
});

gulp.task('build-html', function() {
	console.log("build-html");
	return gulp.src([
		SRC_FOLDER + '/index.html',
		SRC_FOLDER + '/templates/*.html'
	], {
		base: SRC_FOLDER
	})
	.pipe(gulp.dest(DEST_FOLDER));
});

let INJECT_SRC = [
	DEST_FOLDER + '/lib/font-awesome/css/font-awesome.min.css',
	DEST_FOLDER + '/css/demo.css',
	DEST_FOLDER + '/css/component.css',
	DEST_FOLDER + '/css/style.css',
	DEST_FOLDER + '/js/modernizr-custom.js',
	DEST_FOLDER + '/js/classie.js',
	DEST_FOLDER + '/js/main.js',
	DEST_FOLDER + '/lib/moment/min/moment.min.js',
	DEST_FOLDER + '/lib/angular/angular.min.js',
	DEST_FOLDER + '/lib/chart.js/dist/Chart.min.js',
	DEST_FOLDER + '/lib/angular-chart.js/dist/angular-chart.min.js',
	DEST_FOLDER + '/js/languages.js',
	DEST_FOLDER + '/js/functions.js',
	DEST_FOLDER + '/js/dao.js',
	DEST_FOLDER + '/js/app.js',
	DEST_FOLDER + '/js/controllers.js',
	DEST_FOLDER + '/js/filters.js'
];

gulp.task('build-html-with-inject', [ 'build-html' ], function() {
	console.log("inject-js-css");
	var target = gulp.src(DEST_FOLDER+'/index.html');
	var sources = gulp.src(INJECT_SRC, {read: false});
	return target.pipe(inject(sources))
	.pipe(removeHtmlComments())
	.pipe(gulp.dest(DEST_FOLDER));
});

gulp.task('inject-js-css', [ 'build-lib', 'compile-sass', 'build-ori-fonts', 'build-ori-css', 'build-ori-js', 'build-js', 'build-html' ], function() {
	console.log("inject-js-css");
	var target = gulp.src(DEST_FOLDER+'/index.html');
	var sources = gulp.src(INJECT_SRC, {read: false});
	return target.pipe(inject(sources))
	.pipe(removeHtmlComments())
	.pipe(gulp.dest(DEST_FOLDER));
});

gulp.task('build', [ 'inject-js-css', 'build-images' ], function() {
	console.log("build");
});

gulp.task('watch', function() {
	gulp.watch(SRC_FOLDER + '/sass/*.scss', ['compile-sass']);
	gulp.watch(SRC_FOLDER + '/ori-js/*.js', ['build-ori-js']);
	gulp.watch(SRC_FOLDER + '/js/*.js', ['build-js']);
	gulp.watch(SRC_FOLDER + '/index.html', ['build-html-with-inject']);
	gulp.watch(SRC_FOLDER + '/templates/*.html', ['build-html-with-inject']);
});

gulp.task('clean', function() {
	console.log("clean");
	gulp.task('clean', function() {
		return gulp.src([
			DEST_FOLDER + '/lib',
			DEST_FOLDER + '/fonts',
			DEST_FOLDER + '/images',
			DEST_FOLDER + '/css',
			DEST_FOLDER + '/js',
			DEST_FOLDER + '/templates',
			DEST_FOLDER + '/index.html'
		], {read: false})
		.pipe(clean());
	});
});

gulp.task('serve', [ 'build', 'watch' ], function() {
	console.log("serve");
	var rd = DEST_FOLDER.substring(1);
	return gulp.src('')
	.pipe(webserver({
		livereload: true,
		directoryListing: true,
		host: 'localhost',
		port: 8088,
		open: rd+'/index.html',
		fallback: 'index.html'
	}));
});
