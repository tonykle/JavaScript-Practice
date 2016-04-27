describe("Valid input", function() {
  it("9:15", function() {
    expect(findAngle([9, 15])).toEqual(180);
  });
  it("12:15", function() {
    expect(findAngle([12, 15])).toEqual(90);
  });
  it("12:30", function() {
    expect(findAngle([12, 30])).toEqual(180);
  });
  it("12:45", function() {
    expect(findAngle([12, 45])).toEqual(90);
  });
});
