describe("Input with valid data", function() {
  it("input with all positive integers", function() {
    expect(greatestProduct([1, 2, 3, 4, 5, 6])).toEqual([5, 6]);
  });
  it("input with positive and negative integers", function() {
    expect(greatestProduct([8, 9, 12, 1, 2, -1, 5, -3, -20, 2])).toEqual([9, 12]);
  });
  it("input of size 1", function() {
    expect(greatestProduct([8])).toEqual([8]);
  });
});

describe("Input with empty or null values", function() {
  it("data is empty (empty array)", function() {
    expect(greatestProduct([])).toEqual([]);
  });
  it("data is array of length 1 and value of null", function() {
    expect(greatestProduct([null])).toEqual([null]);
  });
});
