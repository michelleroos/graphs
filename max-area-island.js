/*
695. Max Area of Island - Medium

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
  let max = -Infinity;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = dfs(grid, r, c, visited);
      if (size > 0) max = Math.max(max, size);
    }
  }
  if (max === -Infinity) return 0;
  return max;
}

const dfs = (grid, r, c, visited) => {
  if (!validPos(grid, r, c)) return 0;
  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);
  let size = 1;
  size += dfs(grid, r - 1, c, visited);
  size += dfs(grid, r + 1, c, visited);
  size += dfs(grid, r, c + 1, visited);
  size += dfs(grid, r, c - 1, visited);
  return size;
}

const validPos = (grid, r, c) => {
  const validRow = r >= 0 && r < grid.length;
  const validCol = c >= 0 && c < grid[0].length;
  return validRow && validCol && grid[r][c] !== 0;
}

const grid1 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], 
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], 
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]
console.log(maxAreaOfIsland(grid1));

// Output: 6

const grid2 = [[0, 0, 0, 0, 0, 0, 0, 0]]
console.log(maxAreaOfIsland(grid2));
// Output: 0

/*
Runtime: 192 ms, faster than 14.50% of JavaScript online submissions for Max Area of Island.
Memory Usage: 48 MB, less than 5.26% of JavaScript online submissions for Max Area of Island.
 */