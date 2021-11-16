/**
 * modify array by removing first element and placing it at the end.
 * e: not an array: return undefined, empty array: return empty array
 * d: array
 * a: shift() on array to remove first element and store in temp variable.
 *    push() on array to push temp variable value onto end of array.
 *
 *
 *
 */

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return arr;
  }
  let tempElement = arr.shift();
  arr.push(tempElement);
  return arr;
}

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
rotateArray(["a"]); // ["a"]
rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
array; // [1, 2, 3, 4]
