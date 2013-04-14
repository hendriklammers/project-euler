/**
 * Large sum
 *
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 * ../data/problem13_number.txt
 *
 * http://projecteuler.net/problem=13
 */

var problem13 = (function() {
	'use strict';

	var startTime,
		
		findSolution = function() {
			
		};

	return {
		init: function() {
			startTime = new Date().getTime();
			
			findSolution();

			// Show the elapsed time
			console.log('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
		}
	};
}());

problem13.init();