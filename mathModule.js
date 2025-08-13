// small math helpers, keeping it simple

export function add(a, b) {
  // basic add, no fancy stuff
  return Number(a) + Number(b);
}

export function subtract(a, b) {
  return Number(a) - Number(b);
}

// default export: multiply
export default function multiply(a, b) {
  return Number(a) * Number(b);
}

// cross-module combo: use stringModule to uppercase the sum
import { toUpperCase } from './stringModule.js';

export function addAndLogUpper(a, b) {
  const result = add(a, b);
  // convert to string then upper, then log it out
  console.log(toUpperCase(result.toString()));
  return result; // return it too in case we wanna reuse
}
