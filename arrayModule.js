// array helpers

export function findMax(arr) {
  // guard a bit, but keep it beginner-friendly
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  // loop approach (feels more "manual" for learning)
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

export function reverseArray(arr) {
  // return a new reversed array so we don't mutate the original
  return [...arr].reverse();
}
