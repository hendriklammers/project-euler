/**
 * Multiples of 3 and 5
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

(function() {
	'use strict';

	var whileSolution = function() {
		var index = 0,
			sum = 0;

		while (index < 1000) {
			if (index % 5 === 0 || index % 3 === 0) {
				sum += index;
			}
			index++;
		}
		return sum;
	};

	var forSolution = function() {
		var sum = 0;

		for (var i = 0; i < 1000; i++) {
			if (i % 5 === 0 || i % 3 === 0) {
				sum += i;
			}
		}

		return sum;
	};

	console.log(forSolution());

}());