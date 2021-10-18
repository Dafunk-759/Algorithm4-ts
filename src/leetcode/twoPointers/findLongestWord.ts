const isSub = (s: string, p: string) => {
  let p2 = 0;
  for (let p1 = 0; p1 < s.length && p2 < p.length; p1++) {
    if (s[p1] === p[p2]) p2 += 1;
  }
  return p2 >= p.length;
};
const byLen = (s1: string, s2: string) =>
  s1.length !== s2.length
    ? s2.length - s1.length
    : s1 < s2
    ? -1
    : 1;
function findLongestWord(
  s: string,
  dictionary: string[]
): string {
  const sortedDic = dictionary.sort(byLen);
  for (const p of sortedDic) {
    if (isSub(s, p)) return p;
  }
  return "";
}
