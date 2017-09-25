module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },

    sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'style/style.css': 'style/style.sass'
  			}
  		}
  	}
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
 // Default task(s).
  grunt.registerTask('default', ['jshint', 'sass']);

};