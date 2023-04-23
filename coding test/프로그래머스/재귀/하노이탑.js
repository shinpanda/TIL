const moveTop = (tops, number, methods) => {
  if (tops[0].length === 0 && tops[1].length === 0) return false;
  const currentItem = tops[number].pop();
  let isAble = false;
  let results = [];
  // 아이템을 다른 탑에 옮
  for (let i = 0; i < 3; i++) {
    if (i !== number) {
      // 대상에 현재 값보다 큰 값이 없을 때 이동 가능
      if (!tops[i].every((v) => v > currentItem)) {
        const newTops = [...tops];
        newTops[i].push(currentItem);
        moveTop(newTops, number, [...methods, [number + 1, i + 1]]);

        isAble = true;
      }
    }
  }

  if (!isAble) {
    // 다시 집어 넣고 다르게 넣었을 떄 결과 확인
    tops[number].push(currentItem);
    for (let i = 0; i < 3; i++) {
      if (i !== number) {
        const tmpMethod = moveTop([...tops], i, [...method]);

        if (tmpMethod.length > 0) {
          results.push(moveTop([...tops], i, [...method]));
        }
      }
    }
  }
  results.sort((a, b) => a.length - b.length);

  return methods;
};

const solution = (n) => {
  let answer = [[]];
  const tops = [
    Array(n)
      .fill(0)
      .map((_, i) => n - i),
    Array(n).fill(0),
    Array(n).fill(0),
  ];

  // 탑들, 몇번째 탑에서 빼는지, 옮기는 방법, 갯수
  answer = moveTop(tops, 0, []);

  return answer;
};

solution(2);
