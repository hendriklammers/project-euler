/**
 * Lattice paths
 *
 * Starting in the top left corner of a 2*2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * See image: /data/problem15.gif

How many such routes are there through a 20*20 grid?
 *
 * http://projecteuler.net/problem=15
 */
// TODO: Create canvas animation of the routes, just for fun
// TODO: Try math solution?
var problem15 = (function() {
	'use strict';

	var endX = 20,
		endY = 20,
		pathCount = 0,

		findSolution = function() {
			// Use recursion to get to the result, starting at top left (0, 0)
			findPath(0, 0);

			// Show result
			console.log(pathCount);
			// 137846528820
			// Time elapsed: 5857.657 seconds 
		},

		findPath = function(x, y) {
			// Base case: The path has reached end coordinates -> update pathCount
			if (x === endX && y === endY) {
				pathCount++;
				return;
			}

			// Go right
			if (x < endX) {
				findPath(x + 1, y);
			}

			// Go down
			if (y < endY) {
				findPath(x, y + 1);
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

problem15.init();