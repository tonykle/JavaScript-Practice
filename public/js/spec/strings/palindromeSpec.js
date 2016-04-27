describe("Valid input", function() {
  it("given palindrome, returns true", function() {
    expect(isPalindrome('oolloo')).toBe(true);
  });
  it("given non-palindrome, returns false", function() {
    expect(isPalindrome('ookpoo')).toBe(false);
  });
});

describe("Invalid input", function() {
  it("input is of type integer, returns null", function() {
    expect(isPalindrome(535)).toBeNull();
  });
  it("input is of type array, returns null", function() {
    expect(isPalindrome(['535'])).toBeNull();
  });
});
