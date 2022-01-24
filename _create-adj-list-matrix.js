const matrixToAdjList = (matrix) => {
  const adjList = {};
  // const R, C = matrix.length, matrix[0].length
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const node = matrix[r][c]
      // if (!(node in adjList)) adjList[node] = {} this check is redundant. we visit each node only once. I assume that the node names are unique, otherwise this algo wouldn't work.
      adjList[node] = {}
      if (c < C - 1) {
        adjList[node][matrix[r][c + 1]] = 10 // move right
      }
      if (r < R - 1) {
        adjList[node][matrix[r + 1][c]] = 25 // move down
      }
    }
  }
  return adjList;
};