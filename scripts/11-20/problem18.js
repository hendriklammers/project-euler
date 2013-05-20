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
    //TODO: Solve problem by starting at the bottom of the triangle
    
	var triangleData = [],
	
	    exampleTriangle = [
	        [3],
            [7, 4],
            [2, 4, 6],
            [8, 5, 9, 3]
	    ],
	    result,
	
	    findSolution = function() {
			var startTime = new Date().getTime();
			
			//bruteForceSolution();
			
			// Smarter solution
			result = findMaximumPath(triangleData);
			console.log(result);
			
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
		    
		    triangleData = data.split('\n');
		    
		    for (var i in triangleData) {
		        triangleData[i] = triangleData[i].split(' ');
		    }
		    
		    findSolution();
		},
		
		bruteForceSolution = function() {
		    // Brute force using recursion
			var result = findPath(0, 0);
			
			// Show result
			console.log(result);
		},
		
		// Recursive method that returns the biggest sum path
		findPath = function(x, y) {
		    // All numbers in the array are still strings so parse it first..
		    var currentNum = parseInt(triangleData[y][x], 10);
		    
		    // When at the bottom of the triangle
		    if (y === triangleData.length - 1) {
		        return currentNum;
		    } else {
		        // Get biggest path from the 2 numbers on the row below this one.
		        return Math.max(currentNum + findPath(x, y + 1), currentNum + findPath(x + 1, y + 1));
		    }
		},
		
		findMaximumPath = function(triangle) {
		    // Temporary array with highest of current row
		    var tempRow = [],
		        copy = [],
		        rowLength;
		    
		    // Go over each row
		    for (var i = triangle.length - 1; i >= 0; i--) {
		        rowLength = triangle[i].length;
		        copy = [];
		        
		        for (var k = 0; k < rowLength; k++) {
		            if (tempRow.length > 0) {
		                copy[k] = parseInt(triangle[i][k], 10) + tempRow[k];
		            } else {
		                copy[k] = parseInt(triangle[i][k], 10);
		            }
		        }
		        console.log(copy);

		        // Start with empty row
		        tempRow = [];
		        // Only needed when not at the top row
		        if (i > 0) {
                    for (var j = 0; j < rowLength - 1; j++) {
                        tempRow.push(Math.max(copy[j], copy[j + 1]));
                    }
		        }
		    }
		    
		    return copy[0];
		};

	return {
		init: function() {
			// Load data before starting with the actual solution
			loadData();
		}
	};
}());

problem18.init();
