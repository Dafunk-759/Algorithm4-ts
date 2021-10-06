//暴力回溯
//无返回值
function robB(nums: number[]): number {
  let ret = Number.NEGATIVE_INFINITY;
  const backtracking = (
    startIndex: number,
    sum: number
  ): void => {
    if (startIndex >= nums.length) {
      ret = Math.max(ret, sum);
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      backtracking(i + 2, sum + nums[i]);
    }
  };
  backtracking(0, 0);
  return ret;
}
//有返回值
//改写成有返回值的纯函数回溯，可以使用缓存加速
//然而击败百分之5
function robB2(nums: number[]): number {
  const mem = (f: (a1: number, a2: number) => number) => {
    const cache = {};
    return (a1: number, a2: number) => {
      const key = `${a1},${a2}`;
      if (cache[key] === undefined) {
        cache[key] = f(a1, a2);
      }
      return cache[key];
    };
  };
  const memBacktracking = mem(backtracking);
  function backtracking(
    startIndex: number,
    sum: number
  ): number {
    if (startIndex >= nums.length) return sum;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = startIndex; i < nums.length; i++) {
      max = Math.max(
        max,
        memBacktracking(i + 2, sum + nums[i])
      );
    }
    return max;
  }
  return backtracking(0, 0);
}
//dp
function robDP(nums: number[]): number {
  const nToMax = new Array(nums.length + 1).fill(0);
  nToMax[1] = nums[0];
  for (let i = 2; i < nToMax.length; i++) {
    const currMoney = nums[i - 1];
    nToMax[i] = Math.max(
      nToMax[i - 1],
      nToMax[i - 2] + currMoney
    );
  }
  return nToMax[nToMax.length - 1];
}
