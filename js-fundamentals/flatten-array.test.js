const flatenArray = require("./flatten-array");

describe("flatenArray function", () => {
  test("should return a flat array for depth 1", () => {
    expect(flatenArray([1, [2, [3, [4]]]], 1)).toEqual([1, 2, [3, [4]]]);
  });

  test("should return a flat array for depth 2", () => {
    expect(flatenArray([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
  });

  test("should completely flatten the array when depth is high", () => {
    expect(flatenArray([1, [2, [3, [4]]]], 10)).toEqual([1, 2, 3, 4]);
  });

  test("should return the original array if depth is 0", () => {
    expect(flatenArray([1, [2, [3, [4]]]], 0)).toEqual([1, [2, [3, [4]]]]);
  });

  test("should handle an already flat array", () => {
    expect(flatenArray([1, 2, 3, 4], 2)).toEqual([1, 2, 3, 4]);
  });

  test("should handle empty arrays", () => {
    expect(flatenArray([], 2)).toEqual([]);
  });

  test("should handle arrays with mixed types", () => {
    expect(flatenArray([1, "a", [true, [null]]], 2)).toEqual([
      1,
      "a",
      true,
      null,
    ]);
  });

  test("should handle nested empty arrays", () => {
    expect(flatenArray([1, [], [[]], [[[]]]], 2)).toEqual([1, [], [], []]);
  });
});
