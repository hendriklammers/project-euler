describe("findSequence", function () {
  var num;

  beforeEach(function () {
    num = '031234549345';
  });

  it("should have a findSequence method", function () {
    expect(findSequence).toBeDefined();
  });

  it("should return an array", function () {
    // Helper to check for array type
    function isArray(value) {
      return Object.prototype.toString.call(value) === "[object Array]";
    }

    expect(isArray(findSequence(num))).toBeTruthy();
  });

  it("should find a sequence in a string number", function() {
    expect(findSequence(num, 5).length).toEqual(1);
  });

  it("should be able to find multiple sequences in a number", function() {
    expect(findSequence(num, 3).length).toEqual(2);
  });

  it("should be able to find multiple sequences in a row", function() {
    var num = '85234534561234',
      seq = findSequence(num, 4);

    expect(seq.length).toEqual(3);
  });

  it("should be able to find multiple sequences in a row and after that", function() {
    var num = '852345345612347184293456',
      seq = findSequence(num, 4);

    expect(seq.length).toEqual(4);
    console.log(seq);
  });

});