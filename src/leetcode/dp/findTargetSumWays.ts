function findTargetSumWays(
  nums: number[],
  target: number
): number {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  const maxNeg = (sum - target) >> 1;
  let ret = 0;
  const backtracking = (
    index: number,
    applyPos: number,
    applyNeg: number
  ): void => {
    if (applyNeg > maxNeg) return;
    if (index === nums.length) {
      if (applyPos - applyNeg === target) {
        ret += 1;
      }
      return;
    }
    backtracking(
      index + 1,
      applyPos + nums[index],
      applyNeg
    );
    backtracking(
      index + 1,
      applyPos,
      applyNeg + nums[index]
    );
  };
  backtracking(0, 0, 0);
  return ret;
}
const make01Bag = (maxV: number, items: number[]) => {
  const bag = new Array(items.length)
    .fill(0)
    .map((_) => new Array(maxV + 1).fill(0));
  for (let currV = 0; currV <= maxV; currV++) {
    if (currV === 0 || currV === items[0]) {
      bag[0][currV] = 1;
    }
  }
  for (let i = 1; i < items.length; i++) {
    const itemWeight = items[i];
    for (let currV = 0; currV <= maxV; currV++) {
      if (currV < itemWeight) {
        bag[i][currV] = bag[i - 1][currV];
      } else {
        bag[i][currV] =
          bag[i - 1][currV] +
          bag[i - 1][currV - itemWeight];
      }
    }
  }
  return bag;
};
function findTargetSumWaysB(
  nums: number[],
  target: number
): number {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  const twoMaxV = sum + target;
  if (twoMaxV % 2 !== 0) return 0;
  const maxV = twoMaxV / 2;
  const bag = make01Bag(maxV, nums);
  console.log(bag);
  return bag[nums.length - 1][maxV];
}
