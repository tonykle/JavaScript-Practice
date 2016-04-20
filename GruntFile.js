module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
      },
    },
    jshint: {
      files: ['public/js/classes/*.js'],
      options: {
        console: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch']);
};
