const toIndex = (c: string) => (s: string) => {
  const ret: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) ret.push(i);
  }
  return ret;
};
const gt = (nums: number[]) => (n: number, i: number) =>
  n >= nums[i];
const lt = (nums: number[]) => (n: number, i: number) =>
  n <= nums[i];
const canTransform = (
  start: string,
  end: string
): boolean => {
  if (start.replace(/X/g, "") !== end.replace(/X/g, ""))
    return false;
  const toLIndex = toIndex("L");
  const toRIndex = toIndex("R");
  return (
    toLIndex(start).every(gt(toLIndex(end))) &&
    toRIndex(start).every(lt(toRIndex(end)))
  );
};
const canTransform2 = (
  start: string,
  end: string
): boolean => {
  for (let p1 = 0, p2 = 0; true; p1++, p2++) {
    while (start[p1] === "X") p1++;
    while (end[p2] === "X") p2++;
    if (p1 >= start.length && p2 >= end.length) return true;
    if (p1 >= start.length || p2 >= end.length)
      return false;
    if (start[p1] !== end[p2]) return false;
    if (start[p1] === "R" && p1 > p2) return false;
    if (start[p1] === "L" && p1 < p2) return false;
  }
};
