import { swap, targetSort } from "./util";

const selectionSort = (arr: number[]) => {
  const length = arr.length;
  const sortedSort = [...arr];
  let sortCount = 0;
  for (let i = length - 1; i >= 1; i--) {
    let theLargestIndex = 0;
    for (let j = 1; j <= i; j++) {
      if (sortedSort[j] >= sortedSort[theLargestIndex]) {
        theLargestIndex = j;
      }
      sortCount++;
    }
    swap(sortedSort, theLargestIndex, i);
  }

  console.log("sortCount");
  console.log(sortCount);
  return sortedSort;
};
console.log("result");
console.log(selectionSort(targetSort));
