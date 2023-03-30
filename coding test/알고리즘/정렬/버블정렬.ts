import { swap, targetSort } from "./util";

// Bubble Sort
console.log("bubbleSort");
const bubbleSort = (arr: number[]) => {
  const length = arr.length;
  const sortedSort = [...arr];
  let sortCount = 0;
  for (let i = length; i >= 2; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (sortedSort[j] > sortedSort[j + 1]) swap(sortedSort, j, j + 1);
      sortCount++;
    }
  }
  console.log("sortCount");
  console.log(sortCount);
  return sortedSort;
};

console.log("result");
console.log(bubbleSort(targetSort));

console.log("bubbleSort2");
const bubbleSort2 = (arr: number[]) => {
  const length = arr.length;
  const sortedSort = [...arr];
  let sortCount = 0;
  for (let i = length; i >= 2; i--) {
    let sorted = true;
    for (let j = 0; j < i - 1; j++) {
      if (sortedSort[j] > sortedSort[j + 1]) {
        swap(sortedSort, j, j + 1);
        sorted = false;
      }
      sortCount++;
    }
    if (sorted) break;
  }
  console.log("sortCount");
  console.log(sortCount);
  return sortedSort;
};

console.log("result");
console.log(bubbleSort2(targetSort));
