// 소수 판별 알고리즘
// 특정 숫자의 제곱근까지만 약수의 여부를 검증하면 됨.

// 대량의 소수를 한꺼번에 판별하고자 할 때 사용하는 것
// 소수를 판별할 범위만큼 배열 인덱스에 해당하는 값을 넣어준다.

// 2차원 배열 생성 후 값을 초기화
// 2부터 시작하여 특정 숫자의 배수에 해당하는 숫자를 모두 지운다. (자기 자신은 지우지 않는다)
// 2부터 시작해 남아있는 숫자들을 출력한다.

const primeNumberSieve = () => {
  const number = 10000;
  let a = Array.from({ length: number + 1 }, (_, i) => i);

  for (let i = 2; i <= number; i++) {
    if (a[i] === 0) continue;
    for (let j = i + i; j <= number; j += i) {
      a[j] = 0;
    }
  }

  return a.filter((v) => v !== 0).slice(2);
};

console.log(primeNumberSieve());

// 일반 소수 판별 (에라토스테네스의체 X)
const isPrimeNumber = (x) => {
  const end = parseInt(Math.sqrt(x));
  for (let i = 2; i < end; i++) {
    if (x % i === 0) return false;
  }
  return true;
};

const solution = () => {
  console.log(isPrimeNumber(97));
};

solution();
