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

problem19.init();
