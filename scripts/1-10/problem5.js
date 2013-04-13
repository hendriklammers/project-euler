/**
 * Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

(function() {
	'use strict';

	function findSmallestMultiple () {
		var outcome = false,
			count = 1,
			startTime = new Date().getTime();

		while (outcome === false) {
			for (var i = 2; i <= 20; i++) {
				if (count % i === 0) {
					outcome = true;
					// continue;
				} else {
					outcome = false;
					break;
				}
			}

			if (outcome === true) {
				console.log(count);		// Result
				console.log('Time elapsed: ' + ((new Date().getTime() - startTime) / 1000) + ' seconds');
			}

			count++;
		}
	}

	findSmallestMultiple();

}());