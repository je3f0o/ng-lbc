/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : request_animation_factory.js
* Purpose    :
* Created at : 2015-03-17
* Updated at : 2015-03-17
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

angular.module("lbc.factories.requestAnimation", ["lbc.factories.polyfill"])
	.factory("requestAnimationFactory", ["$timeout", "polyfillFactory", function ($timeout, polyfillFactory) {
		var last_time = 0,
		
			// TODO: Create my own math factories for performance
			// TODO: think about how to catch RAF and cache
			fallback = function (callback) {
				var current_time = Date.now(),
					delta_time = Math.max(0, 16 - (current_time - last_time)),

					id = $timeout(function () {
						callback(current_time + delta_time);
					}, delta_time);

				last_time = current_time + delta_time;

				return id;
			};

		return polyfillFactory("requestAnimationFrame", fallback);
	}])
	.factory("cancelAnimationFactory", ["$timeout", "polyfillFactory", function ($timeout, polyfillFactory) {
		var fallback = function (promise) {
			$timeout.cancel(promise);
		};

		return polyfillFactory("cancelAnimationFrame", fallback);
	}]);
