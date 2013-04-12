/**
 * Summation of primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17
 *
 * Find the sum of all the primes below two million.
 *
 * http://projecteuler.net/problem=10
 */

(function() {
	'use strict';

	/**
	 * Use isPrimeNumber to check whether a number is a Prime number or not.
	 * @param  {Number}  value The number to check
	 * @return {Boolean}       Is the given value a Prime Number or not.
	 */
	function isPrimeNumber (value) {
		var max = Math.sqrt(value);
		// Do some checks to prevent the loop from running for numbers that are obvious
		if (isNaN(value) || !isFinite(value) || value % 1 || value < 2) {
			return false;
		}
		if (value % 2 === 0) {
			return (value === 2);
		}
		if (value % 3 === 0) {
			return (value === 3);
		}

		// Go through posible divisions
		for (var i = 5; i <= max; i += 6) {
			if (value % i === 0) {
				return false;
			}    
			if (value % (i + 2) === 0) {
				return false;
			}
		}
		return true;
	}

	var findSolution = function(value) {
		var startTime = new Date().getTime(),
			sum = 0,
			elapsedTime = 0;

		for (var i = 0; i < value; i++) {

			if (isPrimeNumber(i)) {
				sum += i;
			}
		}

		elapsedTime = (new Date().getTime() - startTime) / 1000;
		console.log('Time elapsed: ' + elapsedTime + ' seconds');

		// Result
		console.log(sum);
	};

	findSolution(2000000);	
	
}());