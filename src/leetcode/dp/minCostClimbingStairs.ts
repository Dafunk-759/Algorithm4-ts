function minCostClimbingStairsR(cost: number[]): number {
  const recursive = (top: number): number => {
    if (top < 2) return 0;
    return Math.min(
      cost[top - 1] + recursive(top - 1),
      cost[top - 2] + recursive(top - 2)
    );
  };
  return recursive(cost.length);
}
//dp
function minCostClimbingStairs(cost: number[]): number {
  const minCost: number[] = [0, 0];
  const top = cost.length;
  for (let i = 2; i <= top; i++) {
    minCost[i] = Math.min(
      cost[i - 1] + minCost[i - 1],
      cost[i - 2] + minCost[i - 2]
    );
  }
  return minCost[top];
}
