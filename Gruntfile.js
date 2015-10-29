module.exports = function(grunt) {

  // Load up our grunt tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-cucumber');

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
      
    cucumberjs: {
      src: 'features',
      options: {
        steps: "features/step_definitions"
      }
    },
      
    jshint: {
      files: ['Gruntfile.js', '**/*.js'],
      options: { }
    },

    watch: {
      files: ['<%= **/*.js %>'],
      tasks: ['jshint', 'mochaTest'],
      options: {
        spawn: false,
      },
    }
  });

  grunt.registerTask('default', ['mochaTest', 'jshint']);

};