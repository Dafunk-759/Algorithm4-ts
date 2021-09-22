function reverseLeftWords(s: string, n: number): string {
  const loop = (k: number, ret: string): string => {
    if (k >= n) return ret;
    return loop(k + 1, ret + s.charAt(k));
  };
  return loop(0, s.substring(n));
}

console.log(reverseLeftWords("lrloseumgh", 6));
