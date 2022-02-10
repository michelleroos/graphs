/*
PINTEREST PHONE SCREEN

We have a neardup pipeline at Pinterest, which produces a mapping from every image to a list of up to k near-duplicate images, such as:

near_dups = {
  "A": ["B", "I", "K"],
  "B": ["A", "D"],
  "C": ["E"],
  "D": [],
  "E": [],
  "F": [],
  "G": ["K"],
  "I": [],
  "K": [],
}

Given a mapping such as this one, form neardup clusters: collections of almost identical images.

In the example above, we would form the following groups: (A, B, D, I, G, K), (C, E), and (F).**

*/

// var countComponents = function (n, edges) {
//   let count = 0;
//   const visited = new Set();
//   const graph = createAdjList(n, edges);
//   for (let node in graph) {
//     if (dfs(graph, node, visited) > 0) count++
//   };
//   return count;
// };

// var dfs = function (graph, node, visited) {
//   if (!node) return 0;
//   if (visited.has(node)) return 0;
//   visited.add(node);
//   let size = 1;
//   for (let neighbor of graph[node]) {
//     size += dfs(graph, neighbor, visited);
//   };
//   return size;
// };




const formNearDupsCluster = (images) => {
  const clusters = [];
  const visited = new Set(); // A, B, D, I, K
  for (let image in images) { // A
    const component = dfs(images, image, visited); // A, B, D, I, K
    if (component) clusters.push(Array.from(component));
  }
  return clusters;
}

const dfs = (images, image, visited, component = new Set()) => { // K
  if (!image) return null;
  if (visited.has(image)) return null;
  visited.add(image);
  component.add(image);
  for (let nei of images[image]) {
    dfs(images, nei, visited, component);
  }
  return component;
}

const images = {
  "A": ["B", "I", "K"],
  "B": ["A", "D"],
  "C": ["E"],
  "D": [],
  "E": [],
  "F": [],
  "G": ["K"],
  "I": [],
  "K": [],
}

console.log(formNearDupsCluster(images));
// output: [[A, B, D, I, G, K], [C, E], [F]]
// [ [ 'A', 'B', 'D', 'I', 'K' ], [ 'C', 'E' ], [ 'F' ], [ 'G' ] ]