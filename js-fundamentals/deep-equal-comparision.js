/**
 * Recursively checks if two values are deeply equal.
 *
 * @param {*} obj1 - The first value to compare.
 * @param {*} obj2 - The second value to compare.
 * @returns {boolean} `true` if both values are deeply equal, otherwise `false`.
 *
 * @example
 * deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });
 * // Output: true
 *
 * deepEqual([1, 2, 3], [1, 2, 3]);
 * // Output: true
 *
 * deepEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 2 } });
 * // Output: false
 */
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

module.exports = deepEqual;
