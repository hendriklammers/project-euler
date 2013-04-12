/**
 * A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
 *
 * http://projecteuler.net/problem=9
 */

(function() {
	'use strict';

	var findSolution = function() {
		for (var a = 1; a <= 998; a++) {

			var rest = 1000 - a;

			for (var b = 1; b < rest; b++) {

				var c = rest - b;

				if ((a * a) + (b * b) === (c * c)) {

					// Result
					console.log('a: ' + a + '\nb: ' + b + '\nc: ' + c);
					console.log('product: ' + (a * b * c));

					return;
				}

			}
		}
	};

	findSolution();	
	
}());