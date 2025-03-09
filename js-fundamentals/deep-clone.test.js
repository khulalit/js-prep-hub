const deepClone = require("./deep-clone");

describe("deepClone function", () => {
  test("should clone primitive values", () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone("hello")).toBe("hello");
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
  });

  test("should clone arrays", () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test("should clone objects", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  test("should clone Date objects", () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  test("should handle empty objects and arrays", () => {
    expect(deepClone({})).toEqual({});
    expect(deepClone([])).toEqual([]);
  });

  test("should handle objects with undefined properties", () => {
    const obj = { a: 1, b: undefined };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
  });
});
