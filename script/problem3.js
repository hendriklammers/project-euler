/**
 * Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

(function() {
	'use strict';

	var num = 600851475143,
		result;

	function getPrimeNumber (value) {
		for (var i = 2; i < 100000; i++) {
			if (value % i === 0) {
				var temp = value / i;
				if (temp === 1) {
					result = value;
					console.log(result);		// Result
					return;
				}
				getPrimeNumber(temp);
				return;
			}
		}
	}

	getPrimeNumber(num);

}());