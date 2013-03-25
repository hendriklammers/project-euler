/**
 * Largest product in a series
 *
 * Find the greatest product of five consecutive digits in the 1000-digit number.
 */

(function() {
	'use strict';

	var numbers = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';

	/**
	 * Find the greatest product of a given length of consecutive digits in a large number
	 * @param  {Array || String} numbers Takes a String or Array with numbers.
	 * @param  {Number} length The number of consecutive digits you want get the product from
	 * @return {Number} The greatest product value
	 */
	function findGreatestProduct (numbers, length) {
		var numberData = [],
			numIterations = 0,
			sequenceLength = length,
			greatestProduct = 0;

		if (typeof numbers === 'string') {
			numberData = numbers.split('');
		} else {
			numberData = numbers;
		}
		numIterations = numberData.length - (sequenceLength - 1);

		for (var i = 0; i < numIterations; i++) {
			var product = numberData[i];

			for (var j = 1; j < sequenceLength; j++) {
				product *= numberData[i + j];
			}

			if (product > greatestProduct) {
				greatestProduct = product;
			}
		}

		return greatestProduct;
	}

	console.log(findGreatestProduct(numbers, 5));	// Result


	// TODO: Make it work!
	function findSequence (num) {
		var previousNumber = parseInt(num[0], 10),
			currentNumber = 0,
			seqLenght = 0,
			currentSequence = [previousNumber],
			sequences = [],
			isSequence = false;

		for (var i = 1; i < num.length; i++) {
			currentNumber = parseInt(num[i], 10);

			if (currentNumber === previousNumber + 1) {
				isSequence = true;
				seqLenght++;
				currentSequence.push(currentNumber);

				if (seqLenght === 4) {
					console.log('Found five consecutive digits');
				}
			} else {
				isSequence = false;
				seqLenght = 0;

				if (currentSequence.length === 5) {
					sequences.push(currentSequence);
				}
				currentSequence = [currentNumber];
			}

			previousNumber = currentNumber;
		}

		return sequences;
	}

}());