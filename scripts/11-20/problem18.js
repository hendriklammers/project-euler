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

	var triangle = [],
	
	    findSolution = function() {
			var startTime = new Date().getTime();
			
			// Show the elapsed time
			console.log('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
		},
		
		loadData = function() {
            var request = new XMLHttpRequest();
            request.onload = dataLoadHandler;
            request.open('get', 'data/problem18_triangle.txt', true);
            request.send();
		},
		
		dataLoadHandler = function() {
		    var data = this.responseText;
		    
		    triangle = data.split('\n');
		    
		    for (var i in triangle) {
		        triangle[i] = triangle[i].split(' ');
		    }
		    
		    findSolution();
		};

	return {
		init: function() {
			// Load data before starting with the actual solution
			loadData();
		}
	};
}());

problem18.init();
