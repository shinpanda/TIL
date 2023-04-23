const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(3));

// 피보나치
const fibonacci = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(3));

// memorization
let dp = Array(3).fill(0);

const factorialMemo = (n) => {
  if (n === 1) return 1;
  if (dp[n - 1]) return dp[n - 1];

  dp[n - 1] = n * factorialMemo(n - 1);
  return dp[n - 1];
};

console.log(factorialMemo(3));
