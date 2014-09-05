module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        unused: true,
        eqnull: true
      },
      target1: ['Gruntfile.js', 'js/*.js', '*.js']
    },
    express: {
      options: {
        cmd: process.argv[0],
        opts: [ ],
        args: [ ],
        background: true,
        fallback: function() {},
        port: 3000,
        node_env: undefined,
        delay: 0,
        output: ".+",
        debug: false,
      },
      dev: {
        options: {
          script: 'server.js',
        }
      },
    },
    watch: {
      files: ['server.js'],
      tasks: ['express:dev']
    }
  });

  grunt.registerTask('default',['jshint']);
  grunt.registerTask('serve', ['express:dev','watch']);
};
