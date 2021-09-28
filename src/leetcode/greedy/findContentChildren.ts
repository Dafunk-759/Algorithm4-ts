function findContentChildren(
  g: number[],
  s: number[]
): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let ret = 0;
  let k = -1;
  for (let i = 0; i < g.length; i++) {
    while (k < s.length) {
      k += 1;
      if (s[k] >= g[i]) {
        ret += 1;
        break;
      }
    }
  }
  return ret;
}
