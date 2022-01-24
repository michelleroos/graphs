/*
island count
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
*/

const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (dfs(grid, r, c, visited) > 0) count++;
    };
  };
  return count;
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


let grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];
console.log(islandCount(grid)); 
// -> 3

grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];
console.log(islandCount(grid)); 
// -> 4

grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];
console.log(islandCount(grid)); 
// -> 1

grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];
console.log(islandCount(grid)); 
// -> 0