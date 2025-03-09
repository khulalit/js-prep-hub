const ObjectIs = require("./object-is");

describe("ObjectIs function", () => {
  test("should return true for identical numbers", () => {
    expect(ObjectIs(42, 42)).toBe(true);
    expect(ObjectIs(-10, -10)).toBe(true);
  });

  test("should return true for identical strings", () => {
    expect(ObjectIs("hello", "hello")).toBe(true);
    expect(ObjectIs("", "")).toBe(true);
  });

  test("should return true for identical booleans", () => {
    expect(ObjectIs(true, true)).toBe(true);
    expect(ObjectIs(false, false)).toBe(true);
  });

  test("should return true for NaN comparisons", () => {
    expect(ObjectIs(NaN, NaN)).toBe(true);
  });

  test("should return false for different numbers", () => {
    expect(ObjectIs(42, 43)).toBe(false);
  });

  test("should return false for 0 and -0", () => {
    expect(ObjectIs(0, -0)).toBe(false);
  });

  test("should return false for different types", () => {
    expect(ObjectIs(42, "42")).toBe(false);
    expect(ObjectIs(true, "true")).toBe(false);
  });

  test("should return false for different objects", () => {
    expect(ObjectIs({}, {})).toBe(false);
    expect(ObjectIs([], [])).toBe(false);
  });

  test("should return false for null and undefined", () => {
    expect(ObjectIs(null, undefined)).toBe(false);
  });

  test("should return true for identical object references", () => {
    const obj = { a: 1 };
    expect(ObjectIs(obj, obj)).toBe(true);
  });
});
