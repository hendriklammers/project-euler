/**
 * Longest Collatz sequence
 *
 * The following iterative sequence is defined for the set of positive integers:

n  n/2 (n is even)
n  3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13  40  20  10  5  16  8  4  2  1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
 *
 * http://projecteuler.net/problem=14
 */

var problem14 = (function() {
	'use strict';

	var findSolution = function() {
			var longest = 0,
				startingNumber = 0;

			// Just try everything below 1 million
			for (var i = 2; i < 1000000; i++) {
				var num = i,
					chain = 1;

				// Keep on going till it has reached 1
				while (num >= 2) {
					num = applyCollatz(num);
					chain++;
				}

				// Store the longest chain and it's starting number
				if (chain > longest) {
					longest = chain;
					startingNumber = i;
				}
			}

			// Result
			console.log('Starting number: ' + startingNumber);
			console.log('Length of longest chain: ' + longest);
		},

		applyCollatz = function(value) {
			// Apply Collatz rule to the number
			if (value % 2 === 0) {
				// If even
				return value / 2;
			} else {
				// If odd
				return (3 * value) + 1;
			}
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

problem14.init();