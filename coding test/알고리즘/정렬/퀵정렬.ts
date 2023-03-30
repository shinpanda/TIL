import { swap, targetSort } from "./util";

const partition = (arr: number[], start: number, end: number) => {
  const x = arr[end];
  let i = start - 1 || 0;
  for (let j = start; j < end; j++) {
    if (arr[j] <= x) swap(arr, ++i, j);
  }
  swap(arr, i + 1, end);
  return i + 1;
};

const quickSort = (arr: number[], start: number, end: number) => {
  if (start < end) {
    const base = partition(arr, start, end);
    quickSort(arr, start, base - 1);
    quickSort(arr, base + 1, end);
  }
};

const callQuickSort = (arr: number[]) => {
  const sortedSort = [...targetSort];
  quickSort(sortedSort, 0, sortedSort.length - 1);
  return sortedSort;
};

console.log("result");
console.log(callQuickSort(targetSort));
