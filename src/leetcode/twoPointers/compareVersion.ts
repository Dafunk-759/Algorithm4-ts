const parse = (version: string) =>
  version.split(".").map(Number);
const allZero = (from: number, nums: number[]): boolean => {
  for (let i = from; i < nums.length; i++) {
    if (nums[i] !== 0) return false;
  }
  return true;
};
function compareVersion(
  version1: string,
  version2: string
): number {
  const v1 = parse(version1);
  const v2 = parse(version2);
  let p1: number, p2: number;
  for (
    p1 = 0, p2 = 0;
    p1 < v1.length && p2 < v2.length;
    p1++, p2++
  ) {
    if (v1[p1] > v2[p2]) return 1;
    else if (v1[p1] < v2[p2]) return -1;
  }
  if (p1 >= v1.length && !allZero(p2, v2)) return -1;
  if (p2 >= v2.length && !allZero(p1, v1)) return 1;
  return 0;
}
