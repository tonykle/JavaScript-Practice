describe("Valid input", function() {
  it("9th fibonacci number is 34 (optimal)", function() {
    expect(fibonacci2(9)).toEqual(34);
  });
  it("9th fibonacci number is 34 (non-optimal)", function() {
    expect(fibonacci(9)).toEqual(34);
  });
  it("0th fibonacci number is 0 (optimal)", function() {
    expect(fibonacci2(0)).toEqual(0);
  });
});
