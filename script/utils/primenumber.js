/**
 * Use isPrimeNumber to check whether a number is a Prime number or not.
 * @param  {Number}  value The number to check
 * @return {Boolean}       Is the given value a Prime Number or not.
 */
function isPrimeNumber (value) {
	var max = Math.sqrt(value);
	// Do some checks to prevent the loop from running for numbers that are obvious
	if (isNaN(value) || !isFinite(value) || value % 1 || value < 2) {
		return false;
	}
	if (value % 2 === 0) {
		return (value === 2);
	}
	if (value % 3 === 0) {
		return (value === 3);
	}

	// Go through posible divisions
	for (var i = 5; i <= max; i += 6) {
		if (value % i === 0) {
			return false;
		}    
		if (value % (i + 2) === 0) {
			return false;
		}
	}
	return true;
}