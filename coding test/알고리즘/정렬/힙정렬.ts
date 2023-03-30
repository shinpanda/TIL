import { swap, targetSort } from "./util";

/*
[80, 73, 65, 48, 31, 29, 20, 15, 11, 8, 3] 
*/
// heap
console.log("heap sort");

const heapify = (arr: number[], start: number, end: number) => {
  const left = 2 * start;
  const right = 2 * start + 1;
  let smaller = 0;
  if (right <= end) {
    if (arr[left] < arr[right]) smaller = left;
    else smaller = right;
  } else if (left <= end) smaller = left;
  else return;

  if (arr[smaller] < arr[start]) {
    swap(arr, start, smaller);
    heapify(arr, smaller, end);
  }
};

const buildHeap = (arr: number[], n: number) => {
  for (let i = Math.abs(n / 2); i >= 0; i--) {
    heapify(arr, i, n);
  }
};

const heapSort = (arr: number[]) => {
  const sortedSort = [...arr];
  buildHeap(sortedSort, sortedSort.length - 1);
  for (let i = arr.length - 1; i >= 1; i--) {
    swap(sortedSort, 0, i);
    heapify(sortedSort, 0, i - 1);
  }
  return sortedSort;
};

console.log("result");
console.log(heapSort(targetSort));
