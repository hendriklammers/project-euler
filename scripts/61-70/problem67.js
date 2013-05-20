/**
 * Maximum path sum II
 *
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

 3
 7 4
 2 4 6
 8 5 9 3

 That is, 3 + 7 + 4 + 9 = 23.

 Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.

 NOTE: This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 299 altogether! If you could check one trillion (1012) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)
 
 * Textfile containing the triangle:
 * data/problem67_triangle.txt
 *
 * http://projecteuler.net/problem=67
 */

var problem67 = (function() {
	'use strict';
    
	var triangleData = [],
	    result,
	
	    findSolution = function() {
			var startTime = new Date().getTime();
			
			// Smarter solution
			result = findMaximumPath(triangleData);
			console.log(result);
			
			// Show the elapsed time
			console.log('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
		},
		
		loadData = function() {
		    // Load external textfile containing triangle
            var request = new XMLHttpRequest();
            request.onload = dataLoadHandler;
            request.open('get', 'data/problem67_triangle.txt', true);
            request.send();
		},
		
		dataLoadHandler = function() {
		    var data = this.responseText;
		    
		    // Convert text to array
		    triangleData = data.split('\n');
		    
		    for (var i in triangleData) {
		        triangleData[i] = triangleData[i].split(' ');
		    }
		    
		    findSolution();
		},
		
		// A somewhat smarter method that starts at the bottom of the triangle to find the result
		findMaximumPath = function(triangle) {
		    // Temporary array with highest of current row
		    var highestRow = [],
		        copyRow = [],
		        rowLength;
		    
		    // Go over each row
		    for (var i = triangle.length - 1; i >= 0; i--) {
		        rowLength = triangle[i].length;
		        copyRow = [];
		        
		        // Create a copy of the original row and when available add the values from highestRow
		        for (var k = 0; k < rowLength; k++) {
		            if (highestRow.length > 0) {
		                copyRow[k] = parseInt(triangle[i][k], 10) + highestRow[k];
		            } else {
		                copyRow[k] = parseInt(triangle[i][k], 10);
		            }
		        }

		        // Start with empty row and fill with highest adjoining values
		        highestRow = [];
		        // Only needed when not at the top row
		        if (i > 0) {
                    for (var j = 0; j < rowLength - 1; j++) {
                        highestRow.push(Math.max(copyRow[j], copyRow[j + 1]));
                    }
		        }
		    }
		    
		    // The last array only contains the highest sum
		    return copyRow[0];
		};

	return {
		init: function() {
			// Load data before starting with the actual solution
			loadData();
		}
	};
}());

problem67.init();
