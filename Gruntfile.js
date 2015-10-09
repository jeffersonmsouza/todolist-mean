module.exports = function(grunt){
    grunt.initConfig({
        concat: {
            dist: {
                src: ['node_modules/angular/angular.js','public/**/*.js'],
                dest: 'dist/app.js'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
}