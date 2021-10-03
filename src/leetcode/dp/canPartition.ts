//force overtime
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 !== 0) return false;
  const halfSum = sum / 2;
  const backtracking = (
    index: number,
    sumA: number,
    sumB: number
  ): boolean => {
    if (sumA > halfSum || sumB > halfSum) return false;
    if (sumA === halfSum && sumB === halfSum) return true;
    if (index >= nums.length) throw new Error("never");

    if (backtracking(index + 1, sumA + nums[index], sumB))
      return true;
    if (backtracking(index + 1, sumA, sumB + nums[index]))
      return true;
    return false;
  };
  return backtracking(0, 0, 0);
}
//01 bag
const make01Bag = (maxWeight: number, items: number[]) => {
  const itemCount = items.length;
  const bag = new Array(itemCount)
    .fill(0)
    .map((_) => new Array(maxWeight + 1).fill(0));
  for(let currV = 0; currV <= maxWeight; currV++) {
    if(items[0] <= currV) {
      bag[0][currV] = items[0];
    } 
  }
  for(let i = 1; i < items.length; i++) {
    const itemWeight = items[i];
    const itemValue = items[i];
    for(let currV = 0; currV <= maxWeight; currV++) {
      if(currV < itemWeight) bag[i][currV] = bag[i - 1][currV];
      else {
        bag[i][currV] = Math.max(
          bag[i - 1][currV],
          bag[i - 1][currV - itemWeight] + itemValue
        )
      }
    }
  }
  return bag;
};
function canPartitionB(nums: number[]): boolean {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 !== 0) return false;
  const halfSum = sum / 2;
  const bag01 = make01Bag(halfSum, nums);
  console.log(bag01);
  return bag01[nums.length - 1][halfSum] === halfSum;
}
