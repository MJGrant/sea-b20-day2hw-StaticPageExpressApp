module.exports = function(grunt) {

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //project config
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        unused: true,
        eqnull: true
      },
      target1: ['Gruntfile.js', 'js/*.js', '*.js']
    }
  });

  //define the default task
  grunt.registerTask('default',['jshint']);
};
