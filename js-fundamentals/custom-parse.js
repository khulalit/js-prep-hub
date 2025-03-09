/**
 * Parses a JSON string and converts it into a JavaScript object.
 *
 * @param {string} json - The JSON-formatted string to parse.
 * @returns {*} - The corresponding JavaScript value (object, array, string, number, boolean, or null).
 * @throws {Error} Throws an error if the input JSON is invalid.
 *
 * @example
 * parse('{"name": "Alice", "age": 25}');
 * // Output: { name: "Alice", age: 25 }
 *
 * @example
 * parse('[1, 2, 3]');
 * // Output: [1, 2, 3]
 *
 * @example
 * parse('true');
 * // Output: true
 */
function parse(json) {
  let index = 0;

  function parseValue() {
    skipWhiteSpaces();
    let char = json[index];
    if (char === '"') return parseString();
    if (char === "{") return parseObject();

    if (char === "[") return parseArray();

    if (char === "t" || char === "f") return parseBoolean();

    if (char === "n") return parseNumber();

    if (isDigit(char) || char === "-") return parseNumber();

    throw new Error("Unexpected token at position " + index);
  }

  function parseString() {
    index++; // Skip opening quote
    let result = "";
    while (json[index] !== '"' && index < json.length) {
      result += json[index];
      index++;
    }
    index++; // Skip closing quote
    return result;
  }

  function parseNumber() {
    let start = index;
    while (isDigit(json[index]) || json[index] === "." || json[index] === "-") {
      index++;
    }

    return Number(json.slice(start, index));
  }

  function parseBoolean() {
    if (json.startsWith("true", index)) {
      index += 4;
      return true;
    }
    if (json.startsWith("false", index)) {
      index += 5;
      return false;
    }
    throw new Error(`Invalid boolean at position ${index}`);
  }

  function skipWhiteSpaces() {
    while (
      json[index] === " " ||
      json[index] === "\n" ||
      json[index] === "\t" ||
      json[index] === "\r"
    ) {
      index++;
    }
  }

  function isDigit(char) {
    return char >= "0" && char <= "9";
  }

  function parseArray() {
    index++; // skip the opening bracket
    let result = [];
    skipWhiteSpaces();
    if (json[index] === "]") {
      // empty array case
      index++;
      return result;
    }
    while (index < json.length) {
      result.push(parseValue());
      skipWhiteSpaces();
      if (json[index] === "]") {
        break;
      }
      if (json[index] !== ",")
        throw new Error(`Invalid token at position ${index}`);

      index++; // skip the comma
    }
    index++;
    return result;
  }

  function parseObject() {
    // skip the object
    index++;
    let result = {};
    skipWhiteSpaces();
    if (json[index] !== "}") {
      // empty object case
      index++;
      return result;
    }

    while (index < json.length) {
      if (json[index] !== '"')
        throw new Error(`Invalid token at position ${index}`);
      let key = parseString();

      skipWhiteSpaces();

      if (json[index] !== ":")
        throw new Error(`Invalid token at position ${index}`);

      skipWhiteSpaces();

      let value = parseValue();
      result[key] = value;

      if (json[index] === "}") break;
      if (json[index] !== ",")
        throw new Error(`Invalid token at position ${index}`);
      index++;
    }
    index++;
    return result;
  }

  return parseValue();
}

console.log(parse('"hello"'));

module.exports = parse;

/*

        remove the { } from string

        and split string using , 

        and split the string using : 
        make 0 index as key and 1 as the value 
    
        if value is object or array then call the function again 

*/
