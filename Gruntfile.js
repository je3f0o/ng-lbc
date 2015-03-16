/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : Gruntfile.js
* Purpose    :
* Created at : 2015-03-17
* Updated at : 2015-03-17
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

module.exports = function (grunt) {

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	var config = {
		karma : {
			unit : {
				configFile : "./tests/karma-unit.conf.js",
				autoWatch  : false,
				singleRun  : true
			}
		}
	};
	
	grunt.initConfig(config);

	grunt.registerTask("test", ["karma:unit"]);
	grunt.registerTask("test:unit", ["karma:unit"]);
	grunt.registerTask("build", []);
};
