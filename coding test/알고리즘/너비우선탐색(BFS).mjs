const number = 7;
let c = Array(7).fill(false);
let a;
let result = [];

const bfs = (start) => {
  const q = [];
  q.push(start);
  c[start] = true;
  while (q.length > 0) {
    const x = q.shift();
    result.push(x);
    for (let i = 0; i < a[x].length; i++) {
      const y = a[x][i];
      if (!c[y]) {
        q.push(y);
        c[y] = true;
      }
    }
  }
};

const solution = () => {
  a = [[], [2, 3], [1, 3, 4, 5], [1, 2, 6, 7], [2, 5], [4], [7], [6]];
  bfs(1);
  console.log(result);
};

solution();
