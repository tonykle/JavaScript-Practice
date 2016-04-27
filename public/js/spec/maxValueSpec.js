describe("Valid input", function() {
  it("returns largest integer in array (100) with optimal solution", function() {
    expect(findMax([9, 10, 1, 100, 13, 90])).toEqual(100);
  });
  it("returns largest integer in array (100) with non-optimal solution", function() {
    expect(findMaxTrivial([9, 10, 1, 100, 13, 90])).toEqual(100);
  });
});
