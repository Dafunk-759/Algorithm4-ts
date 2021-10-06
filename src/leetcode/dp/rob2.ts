//暴力回溯
//over time
function rob(nums: number[]): number {
  const mem = (f: (...args: any) => any) => {
    const cache = {};
    return (...args) => {
      const key = args.join(",");
      if (cache[key] === undefined) {
        cache[key] = f(...args);
      }
      return cache[key];
    };
  };
  const memBacktracking = mem(backtracking);
  function backtracking(
    startIndex: number,
    endIndex: number,
    sum: number
  ): number {
    if (startIndex > endIndex) return sum;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = startIndex; i <= endIndex; i++) {
      const end = i === 0 ? nums.length - 2 : endIndex;
      max = Math.max(
        max,
        memBacktracking(i + 2, end, sum + nums[i])
      );
    }
    return max;
  }
  return backtracking(0, nums.length - 1, 0);
}

function robDP(nums: number[]): number {
  if(nums.length === 1) return nums[0];

  const robSub = (subNums:number[]) => {
    if(subNums.length <= 0) throw new Error("bad subNums");
    const dp = new Array(subNums.length + 1).fill(0);
    dp[1] = subNums[0];
    for(let i = 2; i < dp.length; i++) {
      const currMoney = subNums[i - 1];
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + currMoney);
    }
    return dp[dp.length - 1];
  }
  const noTail = robSub(nums.slice(0, nums.length  - 1));
  const noHead = robSub(nums.slice(1));
  return Math.max(noTail, noHead);
}