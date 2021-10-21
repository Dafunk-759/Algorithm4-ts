const getIntersection = (i1: number[], i2: number[]) => {
  const l = Math.max(i1[0], i2[0]);
  const r = Math.min(i1[1], i2[1]);
  if (l > r) return [];
  return [l, r];
};
const intervalIntersection = (
  firstList: number[][],
  secondList: number[][]
): number[][] => {
  const ret: number[][] = [];
  const inRange = (p1: number, p2: number) =>
    p1 < firstList.length && p2 < secondList.length;
  for (let p1 = 0, p2 = 0; inRange(p1, p2); ) {
    const f = firstList[p1];
    const s = secondList[p2];
    const inter = getIntersection(f, s);
    if (inter.length > 0) ret.push(inter);
    if (f[1] < s[1]) p1++;
    else p2++;
  }
  return ret;
};
