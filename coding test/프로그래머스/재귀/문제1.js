// k 시간 안에 갈 수 있는 마을의 개수

const a = [
  [],
  [1, 2, 1],
  [1, 4, 2],
  [2, 3, 3],
  [5, 2, 2],
  [5, 3, 1],
  [5, 4, 2],
];

// 1번 마을에서 k 시간 안에 갈 수 있는 마을의 개수 구하기
// 1번 마을에서 이동 시 k 시간이 지나면 break

const solution = (N, roads, K) => {
  let costs = Array(N + 1).fill(Infinity);
  costs[1] = 0;
  for (let i = 1; i <= N; i++) {
    roads.forEach((element) => {
      if (element[0] === i) {
        costs[element[1]] =
          costs[element[1]] !== 0
            ? Math.min(costs[element[1]], costs[element[0]] + element[2])
            : costs[element[0]] + element[2];
      }
    });
  }
  return costs.filter((c) => c <= K).length;
};

const N = 5; // 마을의 개수
const K = 3; // 시간
console.log(solution(N, a, K));
