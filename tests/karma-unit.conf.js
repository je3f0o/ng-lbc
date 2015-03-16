/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : karma-unit.conf.js
* Purpose    :
* Created at : 2015-03-17
* Updated at : 2015-03-17
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

module.exports = function (config) {
	config.set({
		basePath : "../",
		frameworks: ["jasmine"],
		reporters: ["progress"],
		// browsers: ["Chrome"],
		autoWatch: false,
		singleRun: true,
		colors: true,
		files : [
			"bower_components/angularjs/angular.min.js",
			"bower_components/angular-mocks/angular-mocks.js",
			"source/**/*.js",
			"tests/unit/**/*.js"
		]
	});
};
