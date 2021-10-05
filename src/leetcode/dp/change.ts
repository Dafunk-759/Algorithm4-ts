// backtracking
// 暴力回溯败在了
// 500 500
// [3,5,7,8,9,10,11]
function changeB(amount: number, coins: number[]): number {
  let ret = 0;
  const backtracking = (startIndex:number, sum:number) => {
    if(sum > amount) return;
    if(sum === amount) {
      ret += 1;
      return;
    }
    for(let i = startIndex; i < coins.length; i++) {
      backtracking(i, sum + coins[i]);
    }
  }
  backtracking(0, 0);
  return ret;
}
//dp 完全背包
function change(amount: number, coins: number[]): number {
  const bag = new Array(amount + 1).fill(0);
  bag[0] = 1;
  for(const coin of coins) {
    for(let v = coin; v <= amount; v++) {
      bag[v] += bag[v - coin]
    }
  }
  return bag[bag.length - 1];
}
