describe("isPrimeNumber method", function() {
  
  it("should only take numbers", function() {
    expect(isPrimeNumber(true)).toBeFalsy();
    expect(isPrimeNumber('no number')).toBeFalsy();
    expect(isPrimeNumber([3, 4, 9, 7])).toBeFalsy();
    expect(isPrimeNumber(undefined)).toBeFalsy();
  });

  it("should return false for 0", function() {
    expect(isPrimeNumber(0)).toBeFalsy();
  });

  it("should not validate 1 as a prime number", function() {
    expect(isPrimeNumber(1)).toBeFalsy();
  });

  it("should not validate 18 as a prime number", function() {
    expect(isPrimeNumber(18)).toBeFalsy();
  });

  it("should return true for valid prime numbers", function() {
    expect(isPrimeNumber(2)).toBeTruthy();
    expect(isPrimeNumber(3)).toBeTruthy();
    expect(isPrimeNumber(11)).toBeTruthy();
    expect(isPrimeNumber(17)).toBeTruthy();
  });

});