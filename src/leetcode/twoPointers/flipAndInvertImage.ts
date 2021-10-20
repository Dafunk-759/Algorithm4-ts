const toInvert = (n: number) => (n === 0 ? 1 : 0);
const toReverse = (nums: number[]) => nums.reverse();
const flipAndInvertImage = (
  image: number[][]
): number[][] => {
  return image
    .map(toReverse)
    .map((row) => row.map(toInvert));
};
