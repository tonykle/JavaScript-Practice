describe("Input contains duplicate value", function() {
  it("return true", function() {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });
});

describe("Input does not contain duplicate value", function() {
  it("return false", function() {
    expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false);
  });
});
