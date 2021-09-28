//first
function wiggleMaxLength(nums: number[]): number {
  const makeDiffArr = (nums: number[]) => {
    const diffArr: number[] = [];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] !== 0) {
        diffArr.push(nums[i] - nums[i - 1]);
      }
    }
    return diffArr;
  };
  const diffArr = makeDiffArr(nums);
  if (diffArr.length < 1) {
    return 1;
  }
  let ret = [diffArr[0]];
  for (let i = 1; i < diffArr.length; i++) {
    if (diffArr[i] * ret[ret.length - 1] < 0) {
      ret.push(diffArr[i]);
    }
  }
  return ret.length + 1;
}
//遍历一遍
function wiggleMaxLengthOne(nums: number[]): number {
  const isNotInSlope = (
    selectedArr: number[],
    index: number
  ): boolean => {
    const top = selectedArr[selectedArr.length - 1];
    if (index === nums.length - 1) {
      return nums[index] - top !== 0;
    }
    const preDiff = nums[index] - top;
    const nextDiff = nums[index + 1] - nums[index];
    return preDiff * nextDiff < 0;
  };
  const selectedArr:number[] = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    if(isNotInSlope(selectedArr, i)) {
      selectedArr.push(nums[i])
    }
  }
  return selectedArr.length
}
