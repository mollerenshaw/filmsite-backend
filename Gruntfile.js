module.exports = function (grunt) {
  // Load up our grunt tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-cucumber');
  grunt.loadNpmTasks('grunt-js-beautify');
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
      files: ['**/*.js'],
      options: {
        console: true,
        module: true
      }
    },
    js_beautify: {
      options: {
        end_with_newline: true,
        max_preserve_newlines: 2,
        indent_size: 2,
        replace: true
      },
      files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'features/step_definitions/*.js']
    },
    watch: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'features/step_definitions/*.js'],
      tasks: ['jshint', 'mochaTest'],
      options: {
        spawn: false
      },
    }
  });
  grunt.registerTask('default', ['mochaTest', 'jshint']);
};
