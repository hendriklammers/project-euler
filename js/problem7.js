/**
 * 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
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

	function findPrimeNumber(index) {
		var primeCount = 0,
			counter = 0,
			startTime = new Date().getTime();

		while (primeCount < index) {
			counter++;

			if (isPrimeNumber(counter)) {
				primeCount++;
			}
		}

		console.log(counter);	// Result
		console.log('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
	}

	findPrimeNumber(10001);

}());