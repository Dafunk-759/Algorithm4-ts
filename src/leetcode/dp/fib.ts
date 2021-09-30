function fib(n: number): number {
  const fibArr: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[n];
}
function fib2(n: number): number {
  const loop = (
    curr: number,
    next: number,
    index: number
  ): number => {
    if (index === n) return curr;
    return loop(next, curr + next, index + 1);
  };
  return loop(0, 1, 0);
}
