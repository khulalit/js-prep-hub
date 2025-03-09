/**
 * Recursively merges multiple source objects into a target object.
 * If properties are objects, they are deeply merged instead of being replaced.
 *
 * @param {Object} target - The target object to merge into.
 * @param {...Object} sources - One or more source objects.
 * @returns {Object} The merged object.
 *
 * @example
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { b: { d: 3 }, e: 4 };
 * deepMerge(obj1, obj2);
 * // Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }
 */
function deepMerge(target, ...sources) {
  if (!sources.length) return target;

  for (const source of sources) {
    if (typeof source !== "object" || source === null) continue;

    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const targetValue = target[key];
        const sourceValue = source[key];

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
          target[key] = [...targetValue, ...sourceValue];
        } else if (isObject(targetValue) && isObject(sourceValue)) {
          target[key] = deepMerge({ ...targetValue }, sourceValue);
        } else {
          target[key] = sourceValue;
        }
      }
    }
  }

  return target;
}

/**
 * Helper function to check if a value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
function isObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

module.exports = deepMerge;
