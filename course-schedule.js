/*
207. Course Schedule - Medium (Structy prereqs possible)
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
*/

const createAdjList = (numCourses, prereqs) => {
  const adjList = {};
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    if (!(a in adjList)) adjList[a] = [];
    if (!(b in adjList)) adjList[b] = [];
    adjList[a].push(b);
  }
  for (let i = 0; i < numCourses.length; i++) {
    if (!(i in adjList)) adjList[i] = [];
  }
  return adjList;
}

var canFinish = function (numCourses, prerequisites) {
  const graph = createAdjList(numCourses, prerequisites);
  const visited = new Set(); // black
  const visiting = new Set(); // gray
  for (let node in graph) {
    if (hasCycle(graph, node, visited, visiting)) return false;
  }
  return true;
};

const hasCycle = (graph, node, visited, visiting) => {
  if (visiting.has(node)) return true;
  if (visited.has(node)) return false;
  visiting.add(node);
  for (let nei of graph[node]) {
    if (hasCycle(graph, nei, visited, visiting)) return true;
  }
  visiting.delete(node);
  visited.add(node);
  return false;
}

/**
Runtime: 64 ms, faster than 99.95% of JavaScript online submissions for Course Schedule.
Memory Usage: 47.4 MB, less than 24.85% of JavaScript online submissions for Course Schedule.
 */

const numCourses1 = 2, prereqs1 = [[1,0]];
console.log(func(numCourses1, prereqs1));
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

const numCourses2 = 2, prereqs2 = [[1,0],[0,1]];
console.log(func(numCourses2, prereqs2));
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 