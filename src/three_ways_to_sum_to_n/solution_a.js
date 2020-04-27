// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

// 1 + 2 + ... + N = N*(N+1)/2
// Time complexity: O(1)
// Space complexity: O(1)
var sum_to_n = function (n) {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
};

console.log(sum_to_n(5));
