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
// expected output: [[A, B, D, I, G, K], [C, E], [F]]
// actual output: [ [ 'A', 'B', 'D', 'I', 'K' ], [ 'C', 'E' ], [ 'F' ], [ 'G' ] ]