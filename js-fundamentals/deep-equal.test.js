const deepEqual = require("./deep-equal-comparision");

describe("deepEqual function", () => {
  test("should return true for equal primitive values", () => {
    expect(deepEqual(42, 42)).toBe(true);
    expect(deepEqual("hello", "hello")).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
  });

  test("should return false for different primitive values", () => {
    expect(deepEqual(42, 43)).toBe(false);
    expect(deepEqual("hello", "world")).toBe(false);
    expect(deepEqual(true, false)).toBe(false);
    expect(deepEqual(null, undefined)).toBe(false);
  });

  test("should return true for equal objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test("should return false for different objects", () => {
    const obj1 = { a: 1, b: { c: 3 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test("should return true for equal arrays", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqual([{ a: 1 }], [{ a: 1 }])).toBe(true);
  });

  test("should return false for different arrays", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(deepEqual([{ a: 1 }], [{ a: 2 }])).toBe(false);
  });

  test("should handle empty objects and arrays", () => {
    expect(deepEqual({}, {})).toBe(true);
    expect(deepEqual([], [])).toBe(true);
  });

  test("should return false for objects with different keys", () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
  });

  test("should handle nested structures", () => {
    const obj1 = { a: { b: { c: { d: 4 } } } };
    const obj2 = { a: { b: { c: { d: 4 } } } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test("should return false for functions, symbols, and mixed types", () => {
    expect(
      deepEqual(
        () => {},
        () => {}
      )
    ).toBe(false);
    expect(deepEqual(Symbol("test"), Symbol("test"))).toBe(false);
    expect(deepEqual({ a: 1 }, [1])).toBe(false);
  });
});
