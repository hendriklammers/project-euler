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
    
    var outputText = '';

    return {
        output: document.getElementById('output'),
        inProgress: false,
        
        init: function() {
            var self = this,
                button = document.getElementById('start-button');
            
            button.addEventListener('click', function() {
                self.buttonClickHandler();
            });
        },
        
        buttonClickHandler: function() {
            if (!this.inProgress) {
                var startTime = new Date().getTime();
                
                this.inProgress = true;

                this.findSolution();

                // Show the elapsed time
                this.updateOutput('Time elapsed: ' + (new Date().getTime() - startTime) / 1000 + ' seconds');
                
                this.inProgress = false;
            }
        },
        
        updateOutput: function(text) {
            outputText += text + '<br>';
            this.output.innerHTML = outputText;
        },
        
        findSolution: function() {
            
        }
    };
}());

problem22.init();
