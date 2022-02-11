/*
topological order
Write a function, topologicalOrder, that takes in an object representing the adjacency list for a directed-acyclic graph. The function should return an array containing the topological-order of the graph.

The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.
*/

const topologicalOrder = (graph) => {
  // SETUP
  // initiate all nodes to 0
  const parents = {}; // number of parents to a node
  for (let node in graph) {
    parents[node] = 0;
  }
  // Fill out the number of parents
  for (let node in graph) {
    for (let child of graph[node]) {
      parents[child]++;
    }
  }

  // PREP
  const noParents = [];
  for (let node in parents) {
    if (parents[node] === 0) noParents.push(node);
  }

  // MAIN
  const output = [];
  while (noParents.length) {
    const node = noParents.pop(); // O(1)
    output.push(node);
    for (let child of graph[node]) { // look at the children of currNode
      parents[child]--;
      if (parents[child] === 0) noParents.push(child);
    }
  }
  return output;
};

console.log(topologicalOrder({
  a: ["f"],
  b: ["d"],
  c: ["a", "f"],
  d: ["e"],
  e: [],
  f: ["b", "e"],
})); // -> ['c', 'a', 'f', 'b', 'd', 'e']

console.log(topologicalOrder({
  h: ["l", "m"],
  i: ["k"],
  j: ["k", "i"],
  k: ["h", "m"],
  l: ["m"],
  m: [],
})); // -> ['j', 'i', 'k', 'h', 'l', 'm']

console.log(topologicalOrder({
  q: [],
  r: ["q"],
  s: ["r"],
  t: ["s"],
})); // -> ['t', 's', 'r', 'q']

console.log(topologicalOrder({
  v: ["z", "w"],
  w: [],
  x: ["w", "v", "z"],
  y: ["x"],
  z: ["w"],
})); // -> ['y', 'x', 'v', 'z', 'w']