/*
connected components count
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
*/

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node in graph) {
    if (dfs(graph, node, visited)) count++;
  };
  return count;
};

const dfs = function (graph, node, visited) {
  node = String(node);
  if (visited.has(node)) return false;
  visited.add(node);
  for (let nei of graph[node]) {
    dfs(graph, nei, visited);
  };
  return true;
};

console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
})); 
// -> 2

console.log(connectedComponentsCount({
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
})); 
// -> 1

console.log(connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
})); 
// -> 3

console.log(connectedComponentsCount({})); 
// -> 0

console.log(connectedComponentsCount({
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
})); 
// -> 5
