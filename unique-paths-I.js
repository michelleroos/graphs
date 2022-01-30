/*
62. Unique Paths Medium
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.
*/

var uniquePaths = function (m, n, r = 0, c = 0, memo = {}) {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (r >= m || c >= n) return 0;
  if (r === m - 1 && c === n - 1) return 1;
  const right = uniquePaths(m, n, r, c + 1, memo);
  const down = uniquePaths(m, n, r + 1, c, memo);
  memo[pos] = right + down;
  return right + down;
};

const m = 3
let n = 7
console.log(uniquePaths(m, n))
// Output: 28

n = 2
console.log(uniquePaths(m, n))
// Output: 3