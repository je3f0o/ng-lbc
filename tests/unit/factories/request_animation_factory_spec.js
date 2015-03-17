/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : request_animation_factory_spec.js
* Purpose    :
* Created at : 2015-03-17
* Updated at : 2015-03-17
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

describe("Request animation factory spec", function () {

	beforeEach(module("lbc"));
	
	it("should be true 222", inject(function (requestAnimationFactory, cancelAnimationFactory) {
		expect(true).toBe(true);

		expect(123).toBe(123);
		expect(321).toBe(321);
		expect(222).toBe(222);
	}));
});
