describe("multiplyLarge method", function() {

  it("should be able to handle smaller numbers", function() {
    var result = multiplyLarge([3], 2);
    expect(result).toEqual([6]);
  });

  it("should be able to handle small multipliers", function() {
  	var num = [3, 4, 9, 3, 2, 5, 3, 1, 6],
    	result = multiplyLarge(num, 2);

    expect(result).toEqual([6, 9, 8, 6, 5, 0, 6, 3, 2]);
  });

  it("should be able to handle larger multipliers", function() {
    var num = [4, 3, 6],
    	result = multiplyLarge(num, 7471);

    expect(result).toEqual([3, 2, 5, 7, 3, 5, 6]);
  });

  it("should take Number instead of Array as an argument", function() {
    var result = multiplyLarge(7231, 91);

    expect(result).toEqual([6, 5, 8, 0, 2, 1]);
  });
});