/**
 * Factorial digit sum
 *
 * n! means n  (n  1)  ...  3  2  1

For example, 10! = 10  9  ...  3  2  1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
 *
 * http://projecteuler.net/problem=20
 */

var problem20 = (function() {
	'use strict';

	var STARTING_NUM = 100,

		findSolution = function() {
			
		},

		/**
		 * Method to multiply large numbers
		 * @param  {Array} num  The number that should be multiplied, array format
		 * @param  {Number} multiplier The value that should be used to multiply the number with
		 * @return {Array} The end product in array format, each digit has it's own cell.
		 */
		multiplyLarge = function(num, multiplier) {
			var result = [],
				n = 0,
				rest = 0,
				restArray = [];

			// When typeof num is Number convert to array
			if (typeof num === 'number') {
				num = String.prototype.split.call(num, '');
			}

			// Start at the last available digit
			for (var i = num.length - 1; i >= 0; i--) {
				// Multiply and convert to string
				n = (num[i] * multiplier) + rest + '';

				// Cut of last digit and put at the beginning of the array
				// Only when n consists of more then 1 digit
				if (n.length > 1) {
					result.unshift(parseInt(n.slice(-1), 10));

					// Save the rest for next iteration
					rest = parseInt(n.slice(0, -1), 10);
				} else {
					result.unshift(parseInt(n, 10));
					rest = 0;
				}
			}
			
			// Add what's left after going through all the digits
			if (rest > 0) {
				restArray = (rest + '').slice('');
				for (var j = restArray.length - 1; j >= 0; j--) {
					result.unshift(parseInt(restArray[j], 10));
				}
			}

			return result;
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

problem20.init();