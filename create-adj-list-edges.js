// UNDIRECTED
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

// DIRECTED
const createAdjList = function (edges) {
  const adjList = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in adjList)) adjList[a] = [];
    if (!(b in adjList)) adjList[b] = [];
    adjList[a].push(b);
  };
  return adjList;
};

// const createAdjList = (edges) => {
//   const adjList = {};
//   for (let [a, b] of edges) {
//     if (a in adjList) {
//       adjList[a].push(b)
//     } else {
//       adjList[a] = []
//     }
//   }
//   return adjList;
// }