/**
 * Converts a JavaScript object into a JSON-like string representation.
 *
 * @param {*} obj - The value to convert to a string.
 * @returns {string} The JSON-like string representation of the input.
 *
 * @example
 * stringify({ a: 1, b: "hello" });
 * // Output: '{"a":1,"b":"hello"}'
 */
function stringify(obj) {
  if (obj === null) return "null";

  if (typeof obj === "string") return `"${obj}"`;

  if (typeof obj === "number" || typeof obj === "boolean") return String(obj);

  if (
    typeof obj === "undefined" ||
    typeof obj === "function" ||
    typeof obj === "symbol"
  ) {
    return undefined;
  }

  if (Array.isArray(obj)) {
    let arrayValues = obj.map((item) => stringify(item));
    return `[${arrayValues.join(",")}]`;
  }

  if (typeof obj === "object") {
    let keys = Object.keys(obj);
    let objectValues = keys
      .map((key) => {
        let val = stringify(obj[key]);
        return val !== undefined ? `"${key}":${val}` : "";
      })
      .filter(Boolean);
    return `{${objectValues.join(",")}}`;
  }

  return undefined;
}

module.exports = stringify;
