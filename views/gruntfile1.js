
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.initConfig({
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'src/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/'                  // Destination path prefix
        }]
      }
    }
  });

  grunt.registerTask('default', ['imagemin']);
};