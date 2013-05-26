/**
 * 1000-digit Fibonacci number
 *
 * The Fibonacci sequence is defined by the recurrence relation:

     Fn = Fn1 + Fn2, where F1 = 1 and F2 = 1.

 Hence the first 12 terms will be:

     F1 = 1
     F2 = 1
     F3 = 2
     F4 = 3
     F5 = 5
     F6 = 8
     F7 = 13
     F8 = 21
     F9 = 34
     F10 = 55
     F11 = 89
     F12 = 144

 The 12th term, F12, is the first term to contain three digits.

 What is the first term in the Fibonacci sequence to contain 1000 digits?
 
 *
 * http://projecteuler.net/problem=25
 */

var problem25 = (function() {
    'use strict';
    
    var output = document.getElementById('output'),
        button = document.getElementById('start-button'),
        
        updateOutput = function(text) {
            output.innerHTML = output.innerHTML + text + '<br>';
        };

    return {
        init: function() {
            var self = this;
            
            if (button) {
                button.addEventListener('click', function() {
                    self.buttonClickHandler();
                }, false);
            }
        },
        
        buttonClickHandler: function() {
            var startTime = new Date().getTime();
            
            this.findSolution();

            // Show the elapsed time
            updateOutput('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
        },
        
        findSolution: function() {
            
        },
        
        // TODO: Make it possible to add multiple numbers
        // TODO: Accept numbers as argument
        addLargeNumbers: function(num1, num2) {
            var sum = [],
                len = Math.max(num1.length, num2.length),
                rest = 0;
            
            // Go through every digit of the longest number
            for (var i = 0; i < len; i++) {
                // Get the last number when available from both arrays
                var total = rest + (num1.pop() || 0) + (num2.pop() || 0),
                    n = total % 10;
                    
                // Save the rest, it moves one digit to the left -> divide by 10
                rest = (total - n) / 10;
                
                // Add digit to front of sum array    
                sum.unshift(n);
            }
            
            // Add what's left after going through all the digits
        	if (rest > 0) {
                // Convert the number to an array
        		var arr = String.prototype.split.call(rest, '');
        		
        		for (var j = arr.length - 1; j >= 0; j--) {
        			sum.unshift(parseInt(arr[j], 10));
        		}
        	}
            
            return sum;
        }
    };
}());

problem25.init();
