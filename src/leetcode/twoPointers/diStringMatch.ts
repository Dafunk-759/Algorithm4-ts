const recursive = (
  from: number,
  to: number,
  s: string
): number[] => {
  if (s.length <= 0) return [to];
  const topChar = s[0];
  const subStr = s.slice(1);
  if (topChar === "I")
    return [from].concat(recursive(from + 1, to, subStr));
  return [to].concat(recursive(from, to - 1, subStr));
};
const diStringMatch = (s: string): number[] => {
  return recursive(0, s.length, s);
};
const diStringMatchIter = (s: string): number[] => {
  const ret: number[] = [];
  let from = 0,
    to = s.length;
  for (const c of s) {
    if (c === "I") {
      ret.push(from);
      from += 1;
    } else {
      ret.push(to);
      to -= 1;
    }
  }
  ret.push(from);
  return ret;
};
