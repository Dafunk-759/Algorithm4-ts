const isEx = (n: number | undefined) => n !== undefined;
const toMap = (nums: number[]) => {
  const map: Record<string, number> = {};
  for (const n of nums) {
    map[n] = isEx(map[n]) ? map[n] + 1 : 1;
  }
  return map;
};
function intersect(
  nums1: number[],
  nums2: number[]
): number[] {
  const map = toMap(nums1);
  const ret: number[] = [];
  for (const item of nums2) {
    if (isEx(map[item]) && map[item] > 0) {
      ret.push(item);
      map[item] -= 1;
    }
  }
  return ret;
}
function intersectPtr(
  nums1: number[],
  nums2: number[]
): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const nextP = (p1: number, p2: number) => {
    if (nums1[p1] < nums2[p2]) return [p1 + 1, p2];
    if (nums1[p1] > nums2[p2]) return [p1, p2 + 1];
    return [p1 + 1, p2 + 1];
  };
  const ret: number[] = [];
  for (
    let p1 = 0, p2 = 0;
    p1 < nums1.length && p2 < nums2.length;
    [p1, p2] = nextP(p1, p2)
  ) {
    if (nums1[p1] === nums2[p2]) ret.push(nums1[p1]);
  }
  return ret;
}
