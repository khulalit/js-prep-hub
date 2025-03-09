const stringify = require("./custom-stringyfy");
const parse = require("./custom-stringyfy");

describe("Custom JSON Stringify and Parse", () => {
  test("Stringify basic types", () => {
    expect(stringify("hello")).toBe('"hello"');
    expect(stringify(42)).toBe("42");
    expect(stringify(true)).toBe("true");
    expect(stringify(null)).toBe("null");
  });

  test("Stringify arrays", () => {
    expect(stringify([1, "text", false, null])).toBe('[1,"text",false,null]');
  });

  test("Stringify objects", () => {
    expect(stringify({ name: "John", age: 30 })).toBe(
      '{"name":"John","age":30}'
    );
  });

  test("Parse basic types", () => {
    expect(parse('"hello"')).toBe("hello");
    expect(parse("42")).toBe(42);
    expect(parse("true")).toBe(true);
    expect(parse("null")).toBe(null);
  });

  test("Parse arrays", () => {
    expect(parse('[1,"text",false,null]')).toEqual([1, "text", false, null]);
  });

  test("Parse objects", () => {
    expect(parse('{"name":"John","age":30}')).toEqual({
      name: "John",
      age: 30,
    });
  });

  test("Parse nested objects and arrays", () => {
    const json =
      '{"user":{"name":"Alice","details":{"age":25,"active":true}},"items":[1,2,3]}';
    expect(parse(json)).toEqual({
      user: { name: "Alice", details: { age: 25, active: true } },
      items: [1, 2, 3],
    });
  });
});
