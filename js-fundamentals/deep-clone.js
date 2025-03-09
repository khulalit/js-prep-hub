/**
 * Deeply clones a given object or array.
 *
 * @param {*} obj - The value to clone.
 * @returns {*} A deep copy of the input value.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = deepClone(original);
 * console.log(clone); // { a: 1, b: { c: 2 } }
 */
function deepClone(obj) {
  if (obj === null) {
    return "null";
  }

  if (typeof obj === "string") {
    return `"${obj}"`;
  }

  if (typeof obj === "number" || typeof value === "boolean") {
    return String(obj);
  }

  let result = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        result[key] = obj[key].map((item) => {
          console.log(typeof item);

          return deepClone(item);
        });
      } else {
        result[key] = deepClone(obj[key]);
      }
    } else {
      result[key] = obj[key];
    }
  });

  return result;
}

module.exports = deepClone;
