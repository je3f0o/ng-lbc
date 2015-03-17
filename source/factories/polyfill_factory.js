/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : polyfill_factory.js
* Purpose    :
* Created at : 2015-03-17
* Updated at : 2015-03-17
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

angular.module("lbc.factories.polyfill", [])
	.factory("polyfillFactory", ["$window", function ($window) {
		var vendors = ["webkit", "moz", "o", "ms"];

		return function (function_name, fallback) {
			// Check without vendor prefix
			if ($window[function_name]) {
				return $window[function_name];
			}

			// Search function with vendor prefix
			var suffix = function_name.substr(0, 1).toUpperCase() + function_name.substr(1),
				i, len;

			for (i = 0, len = vendors.length; i < len; ++i) {
				function_name = vendors[i] + suffix;
				if ($window[function_name]) {
					return $window[function_name];
				}
			}

			// Cannot find this function. So return fallback function
			return fallback;
		};
	}]);
