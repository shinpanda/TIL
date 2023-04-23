// 가장 적은 비용으로 모든 노드를 연결하기 위해 사용하는 알고리즘
// 최소 비용 신장 트리를 만들기 위한 알고리즘

// 간선을 거리가 짧은 순서대로 그래프에 포함시킨다.
// 모든 간선 정보를 오름차순으로 정리한 후 비용이 적은 간선부터 차근치근 그래프에 포함시키면 된다.
// 여기서 사이클은 형성하면 안됨

// 1. 정렬된 순서에 맞게 그래프에 포함시킨다.
// 2. 포함시키기 전 사이클 테이블인지 확인한다.
// 3. 사이클을 형성하는 경우 간선을 포함하지 않는다.

const getParent = (set: number[], x: number): number => {
  if (set[x] === x) return x;
  return (set[x] = getParent(set, set[x]));
};

const unionParent = (set: number[], a: number, b: number) => {
  a = getParent(set, a);
  b = getParent(set, b);

  if (a < b) {
    return (set[b] = a);
  }
  return (set[a] = b);
};

const find = (set: number[], a: number, b: number): number => {
  a = getParent(set, a);
  b = getParent(set, b);
  if (a === b) return 1;
  return 0;
};

class Edge {
  public node: [number, number];
  public distance: number;
  constructor(a: number, b: number, distance: number) {
    this.node = [a, b];
    this.distance = distance;
  }
}

const solution = () => {
  const n = 7;
  const m = 11;

  let v: Array<Edge> = [];
  v.push(new Edge(1, 7, 12));
  v.push(new Edge(1, 4, 28));
  v.push(new Edge(1, 2, 67));
  v.push(new Edge(1, 5, 17));
  v.push(new Edge(2, 4, 24));
  v.push(new Edge(2, 4, 62));
  v.push(new Edge(3, 5, 20));
  v.push(new Edge(3, 6, 37));
  v.push(new Edge(4, 7, 13));
  v.push(new Edge(5, 6, 45));
  v.push(new Edge(5, 7, 73));

  v.sort((a, b) => a.distance - b.distance);

  let set: number[] = Array.from({ length: n }, (_, i) => i);

  let sum = 0;
  for (let i = 0; i < v.length; i++) {
    if (!find(set, v[i].node[0] - 1, v[i].node[1] - 1)) {
      sum += v[i].distance;
      unionParent(set, v[i].node[0] - 1, v[i].node[1] - 1);
    }
  }

  console.log(sum);
};

solution();
