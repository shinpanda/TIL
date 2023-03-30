import { targetSort } from "./util";

console.log("mergeSort");
const merge = (arr: number[], start: number, center: number, end: number) => {
  let i = start;
  let j = center + 1;
  let t = 0;
  const tmp: number[] = [];
  while (i <= center && j <= end) {
    if (arr[i] <= arr[j]) {
      tmp[t++] = arr[i++];
    } else {
      tmp[t++] = arr[j++];
    }
  }
  // 왼쪽 부분 배열이 남은 경우
  while (i <= center) {
    tmp[t++] = arr[i++];
  }
  // 오른쪽 부분 배열이 남은 경우
  while (j <= end) {
    tmp[t++] = arr[j++];
  }
  i = start;
  t = 0;
  while (i <= end) {
    arr[i++] = tmp[t++];
  }
};

const mergeSort = (arr: number[], start: number, end: number) => {
  if (start < end) {
    const center = Math.floor((start + end) / 2);
    mergeSort(arr, start, center);
    mergeSort(arr, center + 1, end);
    merge(arr, start, center, end);
  }
};

const callMergeSort = (arr: number[]) => {
  const sortedSort = [...arr];
  mergeSort(sortedSort, 0, sortedSort.length - 1);
  return sortedSort;
};
console.log(callMergeSort(targetSort));
