function repeatedSubstringPattern(s: string): boolean {
  const isMadeBy = (sub: string, s: string): boolean => {
    const loop = (i: number, j: number): boolean => {
      if (i >= s.length) return j === 0;
      if (sub.charAt(j) !== s.charAt(i)) return false;
      return loop(i + 1, (j + 1) % sub.length);
    };
    return loop(0, 0);
  };
  const M = s.length >> 1;
  const loop = (l: number): boolean => {
    if (l > M) return false;
    if (isMadeBy(s.substring(0, l), s)) return true;
    return loop(l + 1);
  };
  return loop(1);
}

console.log(repeatedSubstringPattern("abababa"));
