/**
 * Names scores
 *
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

 For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938  53 = 49714.

 What is the total of all the name scores in the file?
 *
 * http://projecteuler.net/problem=22
 */

var problem22 = (function() {
    'use strict';
    
    var DATA_URL = 'data/names.txt',
        output = document.getElementById('output'),
        button = document.getElementById('start-button'),
        alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        outputText = '';

    return {
        data: null,
        
        init: function() {
            this.loadData(DATA_URL);
        },
        
        buttonClickHandler: function() {
            var startTime = new Date().getTime();

            this.findSolution();

            // Show the elapsed time
            this.updateOutput('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
        },
        
        updateOutput: function(text) {
            outputText += text + '<br>';
            output.innerHTML = outputText;
        },
        
        findSolution: function() {
            var names = this.data.split(','),
                sorted = names.sort(),
                n = sorted.length,
                result = 0;
            
            for (var i = 0; i < n; i++) {
                // Add 1 to index because first start at 1 instead of 0
                result += this.getWordScore(sorted[i], i + 1);
            }
            
            // Show result
            this.updateOutput('Result: ' + result);
        },
        
        getWordScore: function(word, index) {
            return index * this.getWordSum(word);
        },
        
        /**
         * Returns the total alphabetical value of all letters in the given word
         */
        getWordSum: function(word) {
            var n = word.length,
                sum = 0;
            
            if (typeof word !== 'string') {
                return 0;
            }
            
            for (var i = 0; i < n; i++) {
                sum += this.getLetterValue(word[i]);
            }
            
            return sum;
        },
        
        /**
         * Returns the alphabetical index of the given letter
         */
        getLetterValue: function(letter) {
            if (typeof letter !== 'string') {
                return 0;
            }
            
            for (var i = 0; i < alphabet.length; i++) {
                if (alphabet[i] === letter.toLowerCase()) {
                    return i + 1;
                }
            }
            
            return 0;
        },
        
        loadData: function(url) {
            var request = new XMLHttpRequest(),
                self = this;
                
            request.onload = function(event) {
                self.dataLoadHandler(event);
            };
            
            request.open('get', url, true);
            request.send();
        },
        
        dataLoadHandler: function(event) {
            var self = this;
            
            // Add loaded data to objec
            this.data = event.target.responseText;
            
            // When data is loaded enable start button
            button.addEventListener('click', function() {
                self.buttonClickHandler();
            }, false);
        }
    };
}());

problem22.init();
