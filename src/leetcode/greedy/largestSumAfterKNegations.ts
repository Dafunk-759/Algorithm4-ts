function largestSumAfterKNegations(
  nums: number[],
  k: number
): number {
  const negKTimes = (n: number, k: number): number => {
    if(k % 2 === 0) return n
    return -n
  };
  const negArr = (arr: number[], k: number): number[] => {
    arr.sort((a, b) => Math.abs(b) - Math.abs(a));
    for (let i = 0; i < arr.length && k > 0; i++) {
      if (arr[i] >= 0) continue;
      arr[i] = negKTimes(arr[i], 1);
      k -= 1;
    }
    arr[arr.length - 1] = negKTimes(arr[arr.length - 1], k);
    return arr;
  };
  return negArr(nums, k).reduce(
    (acc, curr) => acc + curr,
    0
  );
}
