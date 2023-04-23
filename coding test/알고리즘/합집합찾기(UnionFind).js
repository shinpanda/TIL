// 서로소 집합(Disjoint-Set) 알고리즘
// 여러 개의 노드가 존재할 때 두 개의 노드를 선택. 현재 같은 그래프에 속하는지 판별하는 알고리즘

// 자신이 어떤 부모에 포함되어 있는지 2개의 배열로 표시 [노드번호, 부모노드번호]
// 부모를 합칠 때 일반적으로 더 작은 값 쪽으로 합친다 => 재귀로 상위 부모노드를 찾는다.
// 1 - 2 - 3 이 연결될 때, 3의 경우 먼저 2를 합치고 난 후 재귀로 1을 찾아 넣는다.

const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, a, b) => {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

const findParent = (parent, a, b) => {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if (a === b) return 1;
  return 0;
};

const solution = () => {
  let parent = Array.from({ length: 11 }, (_, i) => i);

  unionParent(parent, 1, 2);
  unionParent(parent, 2, 3);
  unionParent(parent, 3, 4);
  unionParent(parent, 5, 6);
  unionParent(parent, 6, 7);
  unionParent(parent, 7, 8);

  console.log("1과 5가 연결되어 있는지?", findParent(parent, 1, 5));
  unionParent(parent, 1, 5);
  console.log("1과 5가 연결되어 있는지?", findParent(parent, 1, 5));
};

solution();
