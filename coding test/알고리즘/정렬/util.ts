export const targetSort = [8, 65, 11, 29, 80, 3, 31, 48, 73, 20, 15];

export const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
