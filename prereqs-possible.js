/*
prereqs possible
Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.
*/

const createAdjList = (prereqs, numCourses) => {
  const adjList = {};
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    if (!(a in adjList)) adjList[a] = [];
    if (!(b in adjList)) adjList[b] = [];
    adjList[a].push(String(b));
  }
  let i = 0;
  while (i < numCourses.length) {
    if (!i in adjList) adjList[i] = [];
  }
  return adjList;
}

const prereqsPossible = (numCourses, prereqs) => {
  const graph = createAdjList(prereqs, numCourses);
  const visited = new Set(); // Black
  const visiting = new Set(); // Gray
  for (let node in graph) {
    if (hasCycle(graph, node, visited, visiting)) return false;
  }
  return true;
};

const hasCycle = (graph, node, visited, visiting) => {
  if (visiting.has(node)) return true;
  visiting.add(node);
  for (let nei of graph[node]) {
    if (hasCycle(graph, nei, visited, visiting)) return true;
  }
  visiting.delete(node);
  visited.add(node);
  return false;
}

const numCourses1 = 6;
const prereqs1 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses1, prereqs1)); 
// -> true

const numCourses2 = 6;
const prereqs2 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
console.log(prereqsPossible(numCourses2, prereqs2)); 
// -> false

const numCourses3 = 5;
const prereqs3 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
];
console.log(prereqsPossible(numCourses3, prereqs3)); 
// -> true

const numCourses4 = 6;
const prereqs4 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
  [5, 3],
  [3, 5],
];
console.log(prereqsPossible(numCourses4, prereqs4)); 
// -> false

const numCourses5 = 8;
const prereqs5 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [4, 3],
];
console.log(prereqsPossible(numCourses5, prereqs5)); 
// -> true

const numCourses6 = 8;
const prereqs6 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [7, 4],
  [4, 3],
];
console.log(prereqsPossible(numCourses6, prereqs6)); 
// -> false

const numCourses7 = 42;
const prereqs8 = [[6, 36]];
console.log(prereqsPossible(numCourses7, prereqs8)); 
// -> true