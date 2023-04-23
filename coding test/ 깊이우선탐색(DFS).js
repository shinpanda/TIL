const number = 7;

let c = [];
let a;
let result = [];

const dfs = (x) => {
  if (c[x]) return;
  c[x] = true;
  result.push(x);
  for (let i = 0; i < a[x].length; i++) {
    const y = a[x][i];
    dfs(y);
  }
};

const solution = () => {
  a = [[], [2, 3], [1, 3, 4, 5], [1, 2, 6, 7], [2, 5], [2, 4], [3, 7], [3, 6]];
  dfs(1);
  console.log(result);
};
solution();
