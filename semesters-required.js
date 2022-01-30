const semestersRequired = (numCourses, prereqs) => {
  if (!prereqs.length) return 1;
  const graph = createAdjList(prereqs);
  const dist = {};
  for (let node in graph) {
    if (node.length) dist[node] = 1;
  };
  for (let node in graph) {
    dfs(graph, node, dist);
  };
  return Math.max(...Object.values(dist));
};

const dfs = (graph, node, dist) => {
  if (node in dist) return dist[node];
  let semesters = 0;
  for (let neighbor of graph[node]) {
    const neighborDist = dfs(graph, neighbor, dist);
    semesters = Math.max(semesters, dfs(graph, neighbor, dist));
  };
  dist[node] = 1 + semesters;
  return dist[node];
};

const createAdjList = (prereqs) => {
  const graph = {};
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
  };
  return graph;
};

const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];

const test = createAdjList(prereqs);
// console.log(test)