/**
 * Maximum path sum I
 *
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

 * Find the maximum total from top to bottom of the triangle below:
 * data/problem18_triangle.txt
 *
 * http://projecteuler.net/problem=18
 */

var problem18 = (function() {
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

problem18.init();
