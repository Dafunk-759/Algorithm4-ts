//backtracking
//超时
function coinChange(
  coins: number[],
  amount: number
): number {
  let ret: number = Number.POSITIVE_INFINITY;
  const backtracking = (
    startIndex: number,
    sum: number,
    path: number[]
  ): void => {
    if (sum > amount) return;
    if (sum === amount) {
      ret = Math.min(ret, path.length);
      return;
    }
    for (let i = startIndex; i < coins.length; i++) {
      backtracking(
        i,
        sum + coins[i],
        path.concat(coins[i])
      );
    }
  };
  backtracking(0, 0, []);
  return ret === Number.POSITIVE_INFINITY ? -1 : ret;
}
function coinChangeDP(
  coins: number[],
  amount: number
): number {
  const bag = new Array(amount + 1).fill(
    Number.POSITIVE_INFINITY
  );
  bag[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for (let v = 0; v <= amount; v++) {
      if (v >= coin) {
        bag[v] = Math.min(bag[v], bag[v - coin] + 1);
      }
    }
  }
  return bag[bag.length - 1] === Number.POSITIVE_INFINITY
    ? -1
    : bag[bag.length - 1];
}
