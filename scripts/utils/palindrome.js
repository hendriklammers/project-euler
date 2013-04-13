/**
 * Check's whether a number is palindromic or not
 * @param  {Number}  num Value to check
 * @return {Boolean}     is it a palindromic number?
 */
function isPalindrome (num) {
	// First break number into array with individual numbers
	var arr = ''.split.call(num, ''),
		last = arr.length - 1;

	// Need half the amount of iterations of the array length
	for (var i = 0; i < Math.ceil(last / 2); i++) {
		// Compare first with last number
		if (arr[0 + i] !== arr[last - i]) {
			// Not a palindrome when numbers aren't the same
			return false;
		}
	}
	return true;
}