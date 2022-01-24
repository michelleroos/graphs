/*
undirected path

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

const createAdjList = function (edges) {
  const adjList = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in adjList)) adjList[a] = [];
    if (!(b in adjList)) adjList[b] = [];
    adjList[a].push(b);
    adjList[b].push(a);
  };
  return adjList;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createAdjList(edges);
  const visited = new Set();
  return dfs(graph, nodeA, nodeB, visited);
};

const dfs = function (graph, node, target, visited) {
  if (node === target) return true;
  if (visited.has(node)) return false;
  visited.add(node);
  for (let neigh of graph[node]) {
    if (dfs(graph, neigh, target, visited)) return true;
  };
  return false;
};

let edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
console.log(undirectedPath(edges, 'j', 'm')); 
// -> true

edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
console.log(undirectedPath(edges, 'm', 'j')); 
// -> true

edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
console.log(undirectedPath(edges, 'l', 'j')); 
// -> true

edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
console.log(undirectedPath(edges, 'k', 'o')); 
// -> false

edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
console.log(undirectedPath(edges, 'i', 'o')); 
// -> false

edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

console.log(undirectedPath(edges, 'a', 'b')); 
// -> true

edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];
console.log(undirectedPath(edges, 'a', 'c')); 
// -> true

edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];
console.log(undirectedPath(edges, 'r', 't')); 
// -> true

edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];
console.log(undirectedPath(edges, 'r', 'b')); 
// -> false

edges = [
  ['s', 'r'],
  ['t', 'q'],
  ['q', 'r'],
];
console.log(undirectedPath(edges, 'r', 't')); 
// -> true