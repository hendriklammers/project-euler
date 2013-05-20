/**
 * Counting Sundays
 *
 * You are given the following information, but you may prefer to do some research for yourself.

     * 1 Jan 1900 was a Monday.
     * Thirty days has September,
       April, June and November.
       All the rest have thirty-one,
       Saving February alone,
       Which has twenty-eight, rain or shine.
       And on leap years, twenty-nine.
     * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

 How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 
 *
 * http://projecteuler.net/problem=19
 */

var problem19 = (function() {
    'use strict';

    var numberOfDays = function(year) {
            var feb = 28;
            
            if (year % 4 === 0) {
                feb = 29;
                
                if (year % 100 === 0) {
                    feb = 28;
                    
                    if (year % 400 === 0) {
                        feb = 29;
                    }
                }
            }
            
            return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        },
    
        findSolution = function() {
            var numYears = 100,
                currentDay = 0, // Start on monday
                sundays = 0;
                
            // For each year, but start 1 year earlier
            for (var i = 0; i <= numYears; i++) {
                var days = numberOfDays(1900 + i);
                
                // For each month
                for (var j = 0; j < 12; j++) {
                    
                    // Every day
                    for (var k = 0; k < days[j]; k++) {
                        
                        // Don't count sundays in the first year
                        if (i > 0) {
                            // Check if current day is sunday and if it's the first of the month
                            if (currentDay === 6 && k === 0) {
                                sundays++;
                            }
                        }
                        
                        // Set next day
                        currentDay = currentDay < 6 ? currentDay + 1 : 0;
                    }
                }
            }
            
            // Result
            console.log(sundays);
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

problem19.init();
