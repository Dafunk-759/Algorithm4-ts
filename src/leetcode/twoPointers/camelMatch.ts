const isCap = (c: string) => /^[A-Z]$/.test(c);
const isMatch = (p: string) => (s: string) => {
  let p1 = 0,
    p2 = 0;
  while (p1 < s.length && p2 < p.length) {
    if (s[p1] === p[p2]) p1++, p2++;
    else {
      if (isCap(s[p1])) return false;
      p1++;
    }
  }
  if (p2 < p.length) return false;
  for (let i = p1; i < s.length; i++) {
    if (isCap(s[i])) return false;
  }
  return true;
};
const camelMatch = (
  queries: string[],
  pattern: string
): boolean[] => {
  return queries.map(isMatch(pattern));
};
