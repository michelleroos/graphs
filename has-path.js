/*
has path

Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neigh of graph[src]) {
    if (hasPath(graph, neigh, dst)) return true;
  };
  return false;
};

let graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};
console.log(hasPath(graph, 'f', 'k')); 
// true

graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};
console.log(hasPath(graph, 'f', 'j')); 
// false

graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};
console.log(hasPath(graph, 'i', 'h')); 
// true

graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};
console.log(hasPath(graph, 'v', 'w')); 
// true

graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};
console.log(hasPath(graph, 'v', 'z')); 
// false
