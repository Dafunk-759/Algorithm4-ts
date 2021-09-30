function climbStairs(n: number): number {
  const method: number[] = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    method[i] = method[i - 2] + method[i - 1];
  }
  return method[n];
}
