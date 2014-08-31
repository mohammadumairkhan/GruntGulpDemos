var gulp 	= require('gulp');
var concat 	= require('gulp-concat');
var uglify 	= require('gulp-uglify');
var clean 	= require('gulp-clean');


gulp.task('concat', ['clean'], function(){
	return gulp.src('./app/*.js')
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', ['clean'], function(){
	return gulp.src('./dist/scripts.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function(){
	var watcher = gulp.watch('./app/*.js',['concat','uglify']);
	watcher.on('change', function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('clean', function(){
	return gulp.src('./dist/*.js', {read: false})
    	.pipe(clean());
});

gulp.task('build', ['concat', 'uglify']);