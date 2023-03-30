import { targetSort } from "./util";

console.log("insertionSort");
const insertionSort = (arr: number[]) => {
  const sortedSort = [...arr];
  let sortCount = 0;
  for (let i = 1; i < sortedSort.length; i++) {
    let loc = i - 1;
    const newItem = sortedSort[i];
    while (loc >= 0 && newItem < sortedSort[loc]) {
      sortedSort[loc + 1] = sortedSort[loc];
      loc--;
      sortCount++;
    }
    sortedSort[loc + 1] = newItem;
  }
  console.log("sortCount");
  console.log(sortCount);
  return sortedSort;
};

console.log("result");
console.log(insertionSort(targetSort));
