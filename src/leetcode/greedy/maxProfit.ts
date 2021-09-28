function maxProfit(prices: number[]): number {
  const makeDiffArr = (arr: number[]): number[] => {
    const ret: number[] = [];
    for (let i = 1; i < arr.length; i++) {
      const diff = arr[i] - arr[i - 1];
      ret.push(diff);
    }
    return ret;
  };
  return makeDiffArr(prices)
    .filter((price) => price > 0)
    .reduce((acc, curr) => acc + curr, 0);
}
