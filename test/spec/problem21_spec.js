describe('getSum method', function() {
  it('should add the numbers of an array', function() {
    expect(problem21.getSum([2, 5, 7])).toEqual(14);
  });
  
  it('should be able to take string numbers', function() {
    expect(problem21.getSum([3, '6', '1'])).toEqual(10);
  });
});

describe('isAmicable method', function() {
  it('should recognize amicable numbers', function() {
    expect(problem21.isAmicable(220)).toBeTruthy();
    expect(problem21.isAmicable(284)).toBeTruthy();
    expect(problem21.isAmicable(83)).toBeFalsy();
  });
  
  it('should not accept numbers that are the same as the divisor sum', function() {
    expect(problem21.isAmicable(6)).toBeFalsy();
  });
});