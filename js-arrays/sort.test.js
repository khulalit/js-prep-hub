// Test Suite for Custom sort
describe("Array.prototype.sort - Custom QuickSort Implementation", () => {
  test("Sorts an array of numbers in ascending order", () => {
    const numbers = [10, 3, 8, 5, 2, 7];
    numbers.sort((a, b) => a - b);
    expect(numbers).toEqual([2, 3, 5, 7, 8, 10]);
  });

  test("Sorts an array of numbers in descending order", () => {
    const numbers = [10, 3, 8, 5, 2, 7];
    numbers.sort((a, b) => b - a);
    expect(numbers).toEqual([10, 8, 7, 5, 3, 2]);
  });

  test("Sorts an array of strings lexicographically", () => {
    const words = ["banana", "Apple", "cherry"];
    words.sort();
    expect(words).toEqual(["Apple", "banana", "cherry"]);
  });

  test("Sorts an array of strings case-insensitively", () => {
    const words = ["banana", "Apple", "cherry"];
    words.sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
    expect(words).toEqual(["Apple", "banana", "cherry"]);
  });

  test("Sorts an empty array", () => {
    const empty = [];
    empty.sort();
    expect(empty).toEqual([]);
  });

  test("Sorts an array with a single element", () => {
    const oneElement = [42];
    oneElement.sort();
    expect(oneElement).toEqual([42]);
  });

  test("Sorts an array with duplicate elements", () => {
    const duplicates = [3, 1, 2, 3, 2, 1];
    duplicates.sort((a, b) => a - b);
    expect(duplicates).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test("Sorts an array with negative numbers", () => {
    const numbers = [4, -1, -3, 2, 0];
    numbers.sort((a, b) => a - b);
    expect(numbers).toEqual([-3, -1, 0, 2, 4]);
  });

  test("Sorts an array of floating-point numbers", () => {
    const numbers = [1.5, 0.2, 3.8, 2.4];
    numbers.sort((a, b) => a - b);
    expect(numbers).toEqual([0.2, 1.5, 2.4, 3.8]);
  });
});
