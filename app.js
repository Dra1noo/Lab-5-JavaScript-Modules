// bring in what we need
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

// quick tests (check the console)
console.log('Add:', add(5, 3));
console.log('Subtract:', subtract(10, 4));
console.log('Multiply (default):', multiply(4, 5));

console.log('Uppercase:', toUpperCase('hello'));
console.log('Lowercase:', toLowerCase('WORLD'));

console.log('Max:', findMax([1, 2, 3, 4, 5]));
console.log('Reversed:', reverseArray([1, 2, 3]));

// Part 7: combo from math → string
addAndLogUpper(10, 20); // should log "30" in uppercase (still "30", but you get the idea)

// Part 8: final challenge
// find max in an array, multiply by a value, uppercase the result
function maxTimesToUpper(arr, factor) {
  const max = findMax(arr);
  const product = multiply(max, factor);
  const big = toUpperCase(product.toString());
  console.log('Final Challenge →', big);
  return big;
}

// try it
maxTimesToUpper([9, 3, 12, 7], 4); // 12 * 4 = 48 → "48"
