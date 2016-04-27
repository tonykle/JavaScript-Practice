'use strict';

describe("Unflattened array with null and undefined values ", function() {
  it("be flattened", function() {
    expect(flatten([3, 2, [5, 6, 7], 9, "", null, ['word', 'word2', 'word3'], undefined, 'word5'])).toEqual([3, 2, 5, 6, 7, 9, "", null, 'word', 'word2', 'word3', undefined, 'word5']);
  });
});
