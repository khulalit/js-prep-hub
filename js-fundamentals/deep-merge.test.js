const deepMerge = require("./deep-merge");

describe("deepMerge function", () => {
  test("should merge simple objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test("should deeply merge nested objects", () => {
    const obj1 = { a: { x: 1, y: 2 } };
    const obj2 = { a: { y: 3, z: 4 } };
    expect(deepMerge(obj1, obj2)).toEqual({ a: { x: 1, y: 3, z: 4 } });
  });

  test("should merge arrays instead of replacing them", () => {
    const obj1 = { arr: [1, 2] };
    const obj2 = { arr: [3, 4] };
    expect(deepMerge(obj1, obj2)).toEqual({ arr: [1, 2, 3, 4] });
  });

  test("should handle multiple sources", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(deepMerge(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test("should not merge non-object values", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 2 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 2 });
  });

  test("should ignore null and undefined sources", () => {
    const obj1 = { a: 1 };
    const obj2 = null;
    const obj3 = undefined;
    expect(deepMerge(obj1, obj2, obj3)).toEqual({ a: 1 });
  });
});
