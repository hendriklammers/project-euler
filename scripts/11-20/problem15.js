/**
 * Lattice paths
 *
 * Starting in the top left corner of a 22 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * See image: /data/problem15.gif

How many such routes are there through a 20*20 grid?
 *
 * http://projecteuler.net/problem=15
 */
// TODO: Create canvas animation of the routes
var problem15 = (function() {
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

problem15.init();