/**
 * Power digit sum
 *
 * 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2 1000?
 *
 * http://projecteuler.net/problem=20
 */

var problem20 = (function() {
	'use strict';

	var STARTING_NUM = 2,
		POWER = 1000,

		findSolution = function() {
			var total = raisePower(STARTING_NUM, POWER),
				sum = 0;

			for (var i = 0; i < total.length; i++) {
				sum += total[i];
			}

			// Result
			console.log(sum);
		},

		multiplyNumber = function(num, multiplier) {
			var result = [],
				n = 0,
				rest = 0,
				restArray = [];

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
		},

		multiplyNumber: multiplyNumber
	};
}());

problem20.init();