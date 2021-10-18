const makeMap = (s: string) => {
  const map: Record<string, number> = {};
  for (const c of s) {
    map[c] = map[c] === undefined ? 1 : map[c] + 1;
  }
  return map;
};
const mkIsInclude =
  (map: Record<string, number>, s2: string) =>
  (from: number, to: number) => {
    const copy = { ...map };
    for (let i = from; i < to; i++) {
      if (copy[s2[i]] === undefined) return false;
      if (copy[s2[i]] < 1) return false;
      copy[s2[i]] -= 1;
    }
    return true;
  };
function checkInclusion(s1: string, s2: string): boolean {
  const map = makeMap(s1);
  const isInclude = mkIsInclude(map, s2);
  for (let l = 0, r = s1.length; r <= s2.length; l++, r++) {
    if (map[s2[l]] === undefined) continue;
    if (isInclude(l, r)) return true;
  }
  return false;
}
