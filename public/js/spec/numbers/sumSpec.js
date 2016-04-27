describe("Valid input", function() {
  it("one call with two parameters", function() {
    expect(sum(2)(3)).toEqual(5);
  });
  it("two calls with one parameter each time", function() {
    expect(sum(2, 3)).toEqual(5);
  });
});
