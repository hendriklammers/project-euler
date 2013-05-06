/**
 * Number letter counts
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 *
 * http://projecteuler.net/problem=17
 */
// TODO: Refactor everything
var problem17 = (function () {
    'use strict';

    var numbers = [['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        ['hundred', 'thousand']],
        total = [],

    findSolution = function () {
        // To thousand
        for (var l = 0; l < 10; l++) {
            var hundred;

            if (l > 0) {
                hundred = numbers[0][l] + 'hundred';
                total.push(hundred);
            }

            // First count to hundred
            for (var i = -1; i < 8; i++) {
                if (i === -1) {
                    // First go to twenty
                    for (var j = 1; j < 20; j++) {
                        if (l > 0) {
                            total.push(hundred + 'and' + numbers[0][j]);
                        } else if (l === 0) {
                            total.push(numbers[0][j]);
                        }
                    }
                } else {
                    if (l > 0) {
                        total.push(hundred + 'and' + numbers[1][i]);
                    } else if (l === 0) {
                        total.push(numbers[1][i]);
                    }

                    for (var k = 1; k < 10; k++) {
                        var combinedNumber = numbers[1][i] + numbers[0][k];
                        if (l > 0) {
                            total.push(hundred + 'and' + combinedNumber);
                        } else if (l === 0) {
                            total.push(combinedNumber);
                        }
                    }
                }
            }
        }

        total.push('onethousand');
        console.log(countLetters(total));
    },

    countLetters = function(words) {
        var count = 0;

        for (var i = 0; i < words.length; i++) {
            count += words[i].length;
        }

        return count;
    };

    return {
        init: function () {
            var startTime = new Date().getTime();

            findSolution();

            // Show the elapsed time
            console.log('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');

            // Exit Phantomjs
            phantom.exit();
        }
    };
}());

problem17.init();