/*
63. Unique Paths II - Medium
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.
*/

const uniquePathsWithObstacles = (obstacleGrid, r = 0, c = 0, memo = {}) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (invalidPos(obstacleGrid, r, c)) return 0;
  if (r === obstacleGrid.length - 1 && c === obstacleGrid[0].length - 1) return 1;
  const right = uniquePathsWithObstacles(obstacleGrid, r, c + 1, memo);
  const down = uniquePathsWithObstacles(obstacleGrid, r + 1, c, memo);
  memo[pos] = right + down;
  return right + down;
};

const invalidPos = (grid, r, c) => {
  const invalidRow = r === grid.length;
  const invalidCol = c === grid[0].length;
  return invalidRow || invalidCol || grid[r][c] === 1;
};

const obstacleGrid1 = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2

const obstacleGrid2 = [[0,1],[0,0]]
// Output: 1

console.log(uniquePathsWithObstacles(obstacleGrid1));
console.log(uniquePathsWithObstacles(obstacleGrid2));

/*
Runtime: 69 ms, faster than 93.08% of JavaScript online submissions for Unique Paths II.
Memory Usage: 44.3 MB, less than 8.30% of JavaScript online submissions for Unique Paths II.
*/