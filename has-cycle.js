/*
has cycle (in directed graph)
>>> Same as prereqs-possible
Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.
*/

// White, Gray, Black Algorithm
const hasCycle = (graph) => {
  const visited = new Set();
  const visiting = new Set();
  for (let node in graph) {
    if (dfs(graph, node, visited, visiting)) return true;
  }
  return false;
};

const dfs = (graph, node, visited, visiting) => { 
  if (visiting.has(node)) return true;
  visiting.add(node);
  for (let nei of graph[node]) {
    if (dfs(graph, nei, visited, visiting)) return true;
  }
  visited.add(node);
  visiting.delete(node);
  return false;
}

console.log(hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
})); 
// -> true

console.log(hasCycle({
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: [],
})); 
// -> false

console.log(hasCycle({
  a: ["b", "c"],
  b: [],
  c: [],
  e: ["f"],
  f: ["e"],
})); 
// -> true

console.log(hasCycle({
  q: ["r", "s"],
  r: ["t", "u"],
  s: [],
  t: [],
  u: [],
  v: ["w"],
  w: [],
  x: ["w"],
})); 
// -> false

console.log(hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
  g: [],
})); 
// -> true