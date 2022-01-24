/*
shortest path

Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.
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

const shortestPath = (edges, nodeA, nodeB) => {
  const visited = new Set(nodeA);
  const graph = createAdjList(edges);
  const q = [[nodeA, 0]];
  while (q.length) {
    const [node, level] = q.shift();
    if (node === nodeB) return level;
    for (let nei of graph[node]) {
      if (!(visited.has(nei))) {
        visited.add(nei);
        q.push([nei, level + 1]);
      }
    };
  };
  return -1;
};

let edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];
console.log(shortestPath(edges, 'w', 'z')); 
// -> 2

edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];
console.log(shortestPath(edges, 'y', 'x')); 
// -> 1

edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];
console.log(shortestPath(edges, 'a', 'e')); 
// -> 3

edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];
console.log(shortestPath(edges, 'e', 'c')); 
// -> 2

edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];
console.log(shortestPath(edges, 'b', 'g')); 
// -> -1

edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];
console.log(shortestPath(edges, 'w', 'e')); 
// -> 1

edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];
console.log(shortestPath(edges, 'n', 'e')); 
// -> 2

edges = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];
console.log(shortestPath(edges, 'm', 's')); 
// -> 6