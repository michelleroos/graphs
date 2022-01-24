/*
minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
*/

const minimumIsland = (grid) => {
  let min = Infinity;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = dfs(grid, r, c, visited);
      if (size > 0) min = Math.min(min, size);
    };
  };
  return min;
};

const dfs = function (grid, r, c, visited) {
  if (!validPos(grid, r, c)) return 0;
  const pos = createPos(r, c);
  if (visited.has(pos)) return 0;
  visited.add(pos);
  let size = 1;
  size += dfs(grid, r + 1, c, visited);
  size += dfs(grid, r - 1, c, visited);
  size += dfs(grid, r, c + 1, visited);
  size += dfs(grid, r, c - 1, visited);
  return size;
};

const createPos = function (r, c) {
  return r + ',' + c;
};

const validPos = function (grid, r, c) {
  const validRow = r >= 0 && r < grid.length;
  const validCol = c >= 0 && c < grid[0].length;
  return validRow && validCol && grid[r][c] !== 'W';
};

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid); // -> 1
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

minimumIsland(grid); // -> 9
test_03:
const grid = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

minimumIsland(grid); // -> 1