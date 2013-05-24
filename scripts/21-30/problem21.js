/**
 * Amicable numbers
 *
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 If d(a) = b and d(b) = a, where a =/= b, then a and b are an amicable pair and each of a and b are called amicable numbers.

 For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

 Evaluate the sum of all the amicable numbers under 10000.
 
 *
 * http://projecteuler.net/problem=21
 */

var problem21 = (function() {
    'use strict';

    var findSolution = function() {
            var amicableNumbers = [];
            
            // Push amicable numbers in an array to add later
            for (var i = 0; i < 10000; i++) {
                if (isAmicable(i)) {
                    amicableNumbers.push(i);
                }
            }
            
            // Show result
            console.log(getSum(amicableNumbers));
        },
        
        // Checks if a number is amicable
        isAmicable = function(value) {
            var n = getDivisorSum(value);
            
            // Numbers that are the same don't count!
            return getDivisorSum(n) === value && n !== value;
        },
        
        // Returns an array with all the proper divisors of the given number
        getDivisors = function(value) {
            var divisors = [];
            
            for (var i = 0; i < value; i++) {
                if (value % i === 0) {
                    divisors.push(i);
                }
            }
            
            return divisors;
        },
        
        // Take an array with numbers and return the sum of those
        getSum = function(array) {
            var sum = 0;
            
            for (var i in array) {
                sum += parseInt(array[i], 10);
            }
            
            return sum;
        },
        
        // Returns the sum of all divisors of a number
        getDivisorSum = function(value) {
            var divisors = getDivisors(value);
            
            return getSum(divisors);
        };

    return {
        init: function() {
            var startTime = new Date().getTime();
            
            // findSolution();

            // Show the elapsed time
            console.log('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
        },
        
        // For testing
        getSum: getSum,
        isAmicable: isAmicable
    };
}());

problem21.init();
