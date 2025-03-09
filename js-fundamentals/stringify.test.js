const stringify = require("./custom-stringyfy");

describe("stringify function", () => {
  test("should stringify primitive values", () => {
    expect(stringify(42)).toBe("42");
    expect(stringify("hello")).toBe('"hello"');
    expect(stringify(true)).toBe("true");
    expect(stringify(false)).toBe("false");
    expect(stringify(null)).toBe("null");
  });

  test("should stringify arrays", () => {
    expect(stringify([1, 2, 3])).toBe("[1,2,3]");
    expect(stringify(["a", "b", "c"])).toBe('["a","b","c"]');
    expect(stringify([true, false, null])).toBe("[true,false,null]");
  });

  test("should stringify objects", () => {
    expect(stringify({ a: 1, b: "hello" })).toBe('{"a":1,"b":"hello"}');
    expect(stringify({ a: { b: 2 } })).toBe('{"a":{"b":2}}');
  });

  test("should ignore undefined properties in objects", () => {
    expect(stringify({ a: 1, b: undefined })).toBe('{"a":1}');
  });

  test("should handle nested objects and arrays", () => {
    expect(stringify({ a: [1, 2, { b: "text" }] })).toBe(
      '{"a":[1,2,{"b":"text"}]}'
    );
  });

  test("should return undefined for unsupported types", () => {
    expect(stringify(undefined)).toBeUndefined();
    expect(stringify(() => {})).toBeUndefined();
    expect(stringify(Symbol("test"))).toBeUndefined();
  });

  test("should handle empty objects and arrays", () => {
    expect(stringify({})).toBe("{}");
    expect(stringify([])).toBe("[]");
  });
});
