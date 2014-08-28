module.exports = function(grunt){

	grunt.initConfig({
		concat: {
			dist:{
				src:  ['app/*.js'],
				dest: './dist/scripts.js'	
			}
		},
		uglify: {
			dist:{
				src: ['./dist/scripts.js'],
				dest:'./dist/scripts.min.js'	
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}
