// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

// Manually add from 1 until N using while loop
// Time complexity: O(N)
// Space complexity: O(1)
var sum_to_n = function (n) {
  if (n <= 0) return 0;
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i;
    i += 1;
  }
  return sum;
};

console.log(sum_to_n(5));
