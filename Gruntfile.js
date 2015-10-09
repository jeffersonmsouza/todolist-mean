module.exports = function(grunt){
    grunt.initConfig({
        clean: {
            src: ['public/dist/*.js']
        },
        concat: {
            dist:{
                src: ['node_modules/angular/angular.js', 'app/**/*.js'],
                dest: 'public/dist/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};