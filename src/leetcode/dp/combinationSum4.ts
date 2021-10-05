function combinationSum4(
  nums: number[],
  target: number
): number {
  const bag = new Array(target + 1).fill(0);
  bag[0] = 1;
  for(let v = 0; v <= target; v++) {
    for(const n of nums) {
      if(v >= n) bag[v] += bag[v - n];
    }
  }
  return bag[bag.length - 1];
}
