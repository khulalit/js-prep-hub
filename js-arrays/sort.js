/**
 * Custom sort implementation for arrays that uses quick sort.
 * If no compare function is provided, sorts lexicographically like the default `Array.prototype.sort()`.
 *
 * @param {Function} [compareFn] - Optional comparison function (a, b) => number.
 * @returns {Array} The sorted array (in place).
 */
Array.prototype.sort = function (compareFn) {
  if (typeof compareFn !== "function") {
    compareFn = (a, b) => (String(a) > String(b) ? 1 : -1);
  }

  const quickSort = (low, high) => {
    if (low < high) {
      const pivotIndex = partition(low, high);
      quickSort(low, pivotIndex - 1);
      quickSort(pivotIndex + 1, high);
    }
  };

  const partition = (low, high) => {
    const pivot = this[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (compareFn(this[j], pivot) < 0) {
        [this[i], this[j]] = [this[j], this[i]];
        i++;
      }
    }

    [this[i], this[high]] = [this[high], this[i]];
    return i;
  };

  quickSort(0, this.length - 1);
  return this;
};
