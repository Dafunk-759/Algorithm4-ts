function isSubsequence(s: string, t: string): boolean {
  let i: number = 0;
  for (let j = 0; i < s.length && j < t.length; ) {
    if (s[i] === t[j]) {
      i += 1;
      j += 1;
    } else if (s[i] !== t[j]) {
      j += 1;
    }
  }
  return i >= s.length;
}
