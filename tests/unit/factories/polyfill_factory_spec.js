/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : polyfill_factory_spec.js
* Purpose    :
* Created at : 2015-03-17
* Updated at : 2015-03-17
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

describe("Polyfill factory spec", function () {

	beforeEach(module("lbc"));
	
	it("should be true", inject(function (polyfillFactory) {
		var fn = polyfillFactory("requestAnimationFrame", "FALLBACK_FUNCTION");
		expect(typeof fn === "function").toBe(true);

		fn = polyfillFactory("fake_function", function () {
			return "FAKE_FALLBACK_FUNCTION";
		});
		expect(fn()).toBe("FAKE_FALLBACK_FUNCTION");
	}));
});
