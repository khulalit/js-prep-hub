/**
 * Recursively flattens a nested array up to a specified depth.
 *
 * @param {Array} array - The array to flatten.
 * @param {number} depth - The maximum depth to flatten.
 * @param {number} [currDepth=0] - The current depth level (used internally).
 * @returns {Array} A new flattened array up to the specified depth.
 *
 * @example
 * flattenArray([1, [2, [3, [4]]]], 2);
 * // Output: [1, 2, 3, [4]]
 */
function flatenArray(array, depth, currDepth) {
  const result = [];
  if (!currDepth) currDepth = 0;

  currDepth++;
  for (let item of array) {
    if (Array.isArray(item) && currDepth <= depth) {
      const flattenedArray = flatenArray(item, depth, currDepth);
      if (flattenedArray.length === 0) result.push([]);
      else result.push(...flattenedArray);
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatenArray([1, [], [[]], [[[]]]], 2));

module.exports = flatenArray;
