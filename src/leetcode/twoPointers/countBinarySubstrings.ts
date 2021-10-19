const isValid = (s: string, l: number, r: number) =>
  s[l] + s[r] === "01" || s[l] + s[r] === "10";
const countOuter = (s: string, l: number, r: number) => {
  const left = s[l];
  const right = s[r];
  let count = 0;
  for (; l >= 0 && r < s.length; l--, r++) {
    if (s[l] === left && s[r] === right) count += 1;
    else break;
  }
  return count;
};
const countBinarySubstrings = (s: string): number => {
  let count = 0;
  for (let l = 0, r = 1; r < s.length; l++, r++) {
    if (!isValid(s, l, r)) continue;
    count += countOuter(s, l, r);
  }
  return count;
};
