/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[slow] !== 0) {
      slow += 1;
    } else if (nums[slow] === 0 && nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow += 1;
    }
  }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
