/// <binding ProjectOpened='build, connect, watch' />
module.exports = function (grunt) {

    // Utility to load the different option files
    // based on their names
    function loadConfig(path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', { cwd: path }).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }

    // Initial config
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        settings: grunt.file.readJSON('grunt.settings.json') //Loads settings so they may be used in string <%= settings.css %>
    }

    // Load all the tasks options in tasks/options base on the name:
    // watch.js => watch{}
    grunt.util._.extend(config, loadConfig('./grunt/options/'));

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    //Default tasks and builds
   // grunt.registerTask('default', ['build','connect',  'watch']);
    //grunt.registerTask('build', ['includereplace', 'newer:copy']);
    grunt.registerTask('default', ['connect']);

    //JS Specific Tasks
 //   grunt.registerTask('build-scripts', ['jshint','concurrent:concurrentjsbuild', 'notify:js']);
//    grunt.registerTask('build-scripts-force', ['uglify', 'notify:js']);

    //CSS Specific Tasks

    //Watch Specific Tasks
    grunt.registerTask('watchcss', ['notify:css'] );
    grunt.registerTask('watchhtml', ['notify:js']);

};
