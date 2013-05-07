/**
 * Number letter counts
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 *
 * http://projecteuler.net/problem=17
 */
var problem17 = (function () {
    'use strict';

    var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

    findSolution = function() {
        var letterCount = 0;

        // 1 iteration for each hundred
        for (var i = 0; i < 10; i++) {
            letterCount += countLetters(writeHundred(i));
        }

        // Goes to 999 so add 'onethousand'
        letterCount += 'onethousand'.length;

        // RESULT
        console.log(letterCount);
    },

    writeHundred = function(hundred) {
        var words = [],
            century = '';

        // When hundred argument is over 0, meaning it's in the hundreds get the word for it.
        // Pass to century var and make sure first entry in array is the hundred.
        if (hundred > 0) {
            century = numbers[hundred - 1] + 'hundred';
            // Add clean century first
            words.push(century);

            // Append 'and'
            century += 'and';
        }

        // There are 10 tens in hundred but firs iteration goes to 20
        for (var i = 0; i < 9; i++) {

            if (i === 0) {
                // First count to twenty
                for (var j = 0; j < 19; j++) {
                    words.push(century + numbers[j]);
                }
            } else {
                // Push clean ten first
                words.push(century + tens[i]);

                for (var k = 0; k < 9; k++) {
                    var combinedNumber = tens[i] + numbers[k];

                    words.push(century + combinedNumber);
                }
            }
        }

        return words;
    },

    /**
     * Count the total amount of letters from an array with words
     * @param  {Array} words 
     * @return {Number} Combined lettercount from all words in the array
     */
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

            // Phantomjs
            // phantom.exit();
        }
    };
}());

problem17.init();