/**
 * Power digit sum
 *
 * 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2 1000?
 *
 * http://projecteuler.net/problem=16
 */

// Strategy
// Create an array where each digit has it's own cell 4583 -> [4, 5, 8, 3]
// Create a method perfoms the calculation digit per digit from right to left
// Create a method that takes power argument en performs the calculation power times
// Add all numbers (digits) from final array
var problem16 = (function() {
	'use strict';

	var findSolution = function() {
			
		};

	return {
		init: function() {
			var startTime = new Date().getTime();
			
			findSolution();

			// Show the elapsed time
			console.log('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
		}
	};
}());

problem16.init();