//原始动规
function climbStairs(n: number): number {
  const method: number[] = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    method[i] = method[i - 2] + method[i - 1];
  }
  return method[n];
}
//完全背包
function climbStairsB(n: number): number {
  const bag = new Array(n + 1).fill(0);
  bag[0] = 1;
  for(let v = 0; v <= n; v++) {
    for(let stair = 1; stair <= 2; stair++) {
      if(v >= stair) bag[v] += bag[v - stair];
    }
  }
  return bag[bag.length - 1];
}