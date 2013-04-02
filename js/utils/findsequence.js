// TODO: Add options object; minimal length, default length
/**
 * Find a sequence of numbers inside a large number.
 * @param  {String} num    The large number in string format.
 * @param  {Number} length The size of the sequence that should be searched for.
 * @return {Array}        Array with the found sequences.
 */
function findSequence (num, length) {
	var numbers,
		previousNumber = 0,
		currentNumber = 0,
		currentSequence = [],
		result = [],
		numIterations;

	// Convert given number to an Array
	numbers = num.split('');

	// Init some setting before going over the numbers
	previousNumber = parseInt(numbers[0], 10);
	currentSequence = [previousNumber];
	numIterations = numbers.length;

	for (var i = 1; i < numIterations; i++) {
		currentNumber = parseInt(numbers[i], 10);

		if (currentNumber === previousNumber + 1) {
			// Sequence is extended by 1
			currentSequence.push(currentNumber);
			console.log(currentSequence);

			// When sequence has reached the given length
			if (currentSequence.length === length) {
				// Push the sequence in the result array
				result.push(currentSequence);
				// Reset currentSequence to start a new sequence
				currentSequence = [];
			}
		} else {
			// Start new sequence at current number
			currentSequence = [currentNumber];
		}

		previousNumber = currentNumber;
	}

	return result;
}
