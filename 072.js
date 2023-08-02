// # 문제72 : 너비 우선 탐색

// **너비 우선 탐색**이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

const graph = {
  'A': ['E', 'C', 'B'],
  'B': ['A'],
  'C': ['A'],
  'D': ['E','F'],
  'E': ['D', 'A'],
  'F': ['D'],
};

function bfs(graph, start){
  let visited = [];
  let queue = [start];

  while (queue.length !== 0){
    let n = queue.shift();
    if (!visited.includes(n)){
      visited.push(n);
      let sub = graph[n].filter(x => !visited.includes(x));
      for(let i of sub){
        queue.push(i);
      }
    }
  }
  return visited;
}

console.log(bfs(graph, 'E'));