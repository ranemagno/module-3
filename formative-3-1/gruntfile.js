module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/custom.js',
        dest: 'js/custom.min.js'
        // source and destination, you choose what to uglify
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
      files: {                         // Dictionary of files
        'css/custom.css': 'sass/custom.scss'  // 'destination': 'source'
        // 'widgets.css': 'widgets.scss'
        }
      }
    },
    jshint: {
      options: {
        esversion: 6,
        globals: {
          jQuery: true
        },
      },
      files: {
        src: ['js/custom.js']
      },
    },
    csslint: {
      files: {
        src: ['css/custom.css']
      }
    },
    htmllint: {
      your_target: {
        options: {
          force: false,
          plugins: ['htmllint-plugin-name'],
          /* htmllint options go here */
        },
        src: [
          'index.html'
        ]
      }
    },
    watch: {
      scripts: {
        files: ['js/custom.js', 'sass/custom.scss', 'index.html'],
        tasks: ['uglify', 'sass', 'jshint'],
        options: {
          reload: true,
          livereload: true
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmllint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'uglify', 'sass', 'jshint', 'csslint', 'htmllint']);

  grunt.registerTask('dev', ['watch', 'sass', 'jshint', 'csslint']);
  grunt.registerTask('prod', ['uglify']);

};
