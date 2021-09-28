//暴力法改进
function maxSubArray(nums: number[]): number {
  let maxSum = Number.NEGATIVE_INFINITY;
  for (let left = 0; left < nums.length; left++) {
    let sum = 0;
    let right: number;
    for (right = left; right < nums.length; right++) {
      sum += nums[right];
      maxSum = Math.max(maxSum, sum);
      if (sum < 0) {
        left = right;
        break;
      }
    }
    if (right === nums.length) {
      break;
    }
  }
  return maxSum;
}
//greedy
function maxSubArrayG(nums: number[]): number {
  const makeCountArr = (nums: number[]): number[] => {
    const ret: number[] = [];
    let count = 0;
    nums.forEach((n) => {
      count += n;
      ret.push(count);
      if (count < 0) count = 0;
    });
    return ret;
  };
  return Math.max(...makeCountArr(nums));
}
//分治
function maxSubArrayF(nums: number[]): number {
  const divide = (left: number): number => {
    let maxSum = Number.NEGATIVE_INFINITY;
    if (left >= nums.length) {
      return maxSum;
    }
    let sum = 0;
    for (; left < nums.length; left++) {
      sum += nums[left];
      maxSum = Math.max(maxSum, sum);
      if (sum < 0) break;
    }
    return Math.max(maxSum, divide(left + 1));
  };
  return divide(0);
}
