describe('getLetterValue method', function() {
  it('should return the correct value', function() {
    expect(problem22.getLetterValue('a')).toEqual(1);
    expect(problem22.getLetterValue('z')).toEqual(26);
  });
  
  it('should take both upper- and lowercase arguments', function() {
    expect(problem22.getLetterValue('B')).toEqual(2);
    expect(problem22.getLetterValue('b')).toEqual(2);
  });
  
  it('should return 0 for anything that is not a letter from the alphabet', function() {
    expect(problem22.getLetterValue(5)).toEqual(0);
    expect(problem22.getLetterValue('9')).toEqual(0);
    expect(problem22.getLetterValue('%')).toEqual(0);
  });
  
  it('should return 0 when length of argument is more than 1', function() {
    expect(problem22.getLetterValue('abc')).toEqual(0);
  });
});

describe('getWordSum method', function() {
  it('should return the total sum of all letters in a word', function() {
    expect(problem22.getWordSum('aab')).toEqual(4);
    expect(problem22.getWordSum('zulu')).toEqual(80);
    expect('abc').not.toEqual(5);
  });
  
  it('should return 0 if anything other than a string is given as argument', function() {
    expect(problem22.getWordSum(56)).toEqual(0);
  })
});

describe('getWordScore method', function() {
  it('should return the product of the word sum and the words index', function() {
    expect(problem22.getWordScore('COLIN', 938)).toEqual(49714);
  })
})