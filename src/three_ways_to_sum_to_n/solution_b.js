// Problem 1 B
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

// Manually add from 1 until N using for loop
// Time complexity: O(N)
// Space complexity: O(1)
var sum_to_n = function (n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
};

console.log(sum_to_n(5));
