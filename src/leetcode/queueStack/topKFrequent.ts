//method chain
function topKFrequent(nums: number[], k: number): number[] {
  const makeMap = (nums: number[]) =>
    nums.reduce((map, num) => {
      if (!map.has(num)) map.set(num, 1);
      else map.set(num, (map.get(num) as number) + 1);
      return map;
    }, new Map<number, number>());
  return Array.from(makeMap(nums))
    .sort(([n1, f1], [n2, f2]) => f2 - f1)
    .slice(0, k)
    .map(([n, k]) => n);
}
