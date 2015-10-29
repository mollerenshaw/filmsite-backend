module.exports = function(grunt) {

  // Load up our grunt tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
    
  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'test-results.log', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    },
      
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js'],
      options: { }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'mochaTest'],
      options: {
        spawn: false,
      },
    }
  });

  grunt.registerTask('default', ['mochaTest', 'jshint']);

};