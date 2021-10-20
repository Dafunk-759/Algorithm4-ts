const isOdd = (n: number) => n % 2 === 1;
const isEven = (n: number) => !isOdd(n);
const toPairs =
  (odds: number[]) => (even: number, i: number) =>
    [even, odds[i]];
const sortArrayByParityII = (nums: number[]): number[] => {
  const odds = nums.filter(isOdd);
  const evens = nums.filter(isEven);
  return evens.flatMap(toPairs(odds));
};
