describe('addLargeNumbers method', function() {
  it('should have an addLargeNumbers method', function() {
    expect(problem25.addLargeNumbers).toBeDefined();
  });
  
  it('should return the sum of two arrays', function() {
    expect(problem25.addLargeNumbers([4, 2, 6], [1, 5, 3])).toEqual([5, 7, 9]);
  });
  
  it('should return the sum when one array is longer', function() {
    expect(problem25.addLargeNumbers([6, 4, 1], [1, 4, 8, 3, 5])).toEqual([1, 5, 4, 7, 6]);
  });
  
  it('should give correct sum when the adding of first two digits will total more than 10', function() {
    expect(problem25.addLargeNumbers([7, 3], [8, 5])).toEqual([1, 5, 8]);
  });
});