/**
 Do not return anything, modify arr in-place instead.
 */
const toDupZero = (n: number) => {
  if (n >= 1 && n <= 9) return n;
  return [0, 0];
};
const duplicateZeros = (arr: number[]): void => {
  const dupArr = arr.flatMap(toDupZero);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = dupArr[i];
  }
};
