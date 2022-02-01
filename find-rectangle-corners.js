/*
Twitch question
Given a rectangle represented by a 0-1 2-d array and assume it contains one rectangle of all 0, return the upper left corner and lower right corner.

Followup, what if there are multiple rectangles that are made of 0, return all.
*/

const findCoordinates = (grid) => {
  const coordinates = [];
  // const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const rectangle = dfs(grid, r, c, new Set());
      if (rectangle) coordinates.push(rectangle);
    }
  }
  return coordinates;
}

const dfs = (grid, r, c, visited) => {
  if (invalidPos(grid, r, c)) return null;
  const pos = r + ',' + c;
  if (visited.has(pos)) return null;
  visited.add(pos);
  dfs(grid, r, c, visited);
  dfs(grid, r, c, visited);
  dfs(grid, r, c, visited);
  dfs(grid, r, c, visited);
  const rectangle = visited.entries();
  console.log(rectangle);
  return [[rectangle[0].split(''), rectangle[2].split('')], [rectangle[rectangle.length - 2].split(''), rectangle[rectangle.length - 1].split('')]];
}

const invalidPos = (grid, r, c) => {
  const invalidRow = r < 0 || r >= grid.length;
  const invalidCol = c < 0 || c >= grid[0].length;
  return invalidRow || invalidCol || grid[r][c] === 1;
}

const grid1 =
[
  [1,1,1,1,1],
  [1,0,0,1,1],
  [1,0,0,1,1],
  [1,1,1,1,1]
];
console.log(findCoordinates(grid1));
// should return [[[1,1],[2,2]]]

const grid2 =
[
  [1,1,1,1,1],
  [1,0,0,1,1],
  [1,0,0,1,1],
  [1,1,1,1,0]
];
console.log(findCoordinates(grid2));
// should return [[[1,1],[2,2]],[[3,4],[3,4]]]