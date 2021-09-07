function search(nums: number[], target: number): number {
  function binarySearch(lo: number, hi: number): number {
    if (hi < lo) return -1;

    // const mid = lo + Math.floor((hi - lo) / 2);
    const mid = (lo + hi) >> 1;
    //右移1位,表示操作数除以2
    //5.5 >> 1  //2.5 操作数会变为整数
    // 9 >> 2;   //2
    // -9 >> 2;  //-3
    //左移1位,表示操作数乘以2
    // 2 << 1;
    // 4;
    // 2.5 << 1; //先将操作数取整
    // 4;
    // -2.5 << 1;
    // -4;
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target)
      return binarySearch(mid + 1, hi);
    else return binarySearch(lo, mid - 1);
  }

  return binarySearch(0, nums.length - 1);
}

function test() {
  const nums = [-1, 0, 3, 5, 9, 12],
    target = 2;

  console.log(search(nums, target));
}

test();
