/**
 * Determines whether two values are the same value.
 *
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} `true` if the values are the same, otherwise `false`.
 *
 * @example
 * ObjectIs(42, 42); // true
 * ObjectIs(NaN, NaN); // true
 * ObjectIs(0, -0); // false
 * ObjectIs({}, {}); // false
 */
function ObjectIs(value1, value2) {
  if (value1 === value2) {
    if (value1 === 0 && value2 === 0) {
      return 1 / value1 === 1 / value2;
    }

    return true;
  }

  // trick is NaN is not equal to itself
  return value1 !== value1 && value2 !== value2;
}

module.exports = ObjectIs;
