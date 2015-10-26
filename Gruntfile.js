module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require("jit-grunt")(grunt);

    grunt.initConfig({
        concat: {
            main: {
                src: ["css/*.css"],
                dest: "dist/style.css"
            }
        },
        cssmin: {
            main: {
                src: ["dist/style.css"],
                dest: "dist/style.min.css"
            }
        },
        purifycss: {
            target: {
                src: ['*.html'],
                css: ['dist/style.min.css'],
                dest: 'dist/purestyle.css'
            }
        }
    });

    grunt.registerTask('default', ['concat', 'cssmin', 'purifycss']);

};
