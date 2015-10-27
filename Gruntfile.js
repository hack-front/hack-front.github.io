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
                src: ['*.html'], //may need to add additional files
                css: ['dist/style.min.css'],
                dest: 'dist/purestyle.css'
            }
        },
        watch: {
            js: {
                files: ["**/*.js"],
                tasks: "jshint"
            }
        },
        jshint: {
        	src: ["Gruntfile.js", "scripts/**/*.js"]
        }
    });

    grunt.registerTask('default', ['concat', 'cssmin', 'purifycss', 'watch', 'jshint']);

};

console.log("changed the gruntfile.js");