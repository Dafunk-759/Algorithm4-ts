function partition(s: string): string[][] {
  const max = s.length;
  const ret: string[][] = [];
  const isPalindrome = (s: string): boolean => {
    const loop = (i: number, j: number): boolean => {
      if (i >= j) return true;
      if (s.charAt(i) !== s.charAt(j)) return false;
      return loop(i + 1, j - 1);
    };
    return loop(0, s.length - 1);
  };
  const backTracking = (
    startIndex: number,
    l: number,
    path: string[]
  ): void => {
    if (l === max) {
      ret.push(path);
      return;
    }

    for (let i = startIndex; i < max; i++) {
      const subString = s.slice(startIndex, i + 1);
      if (!isPalindrome(subString)) continue;
      backTracking(
        i + 1,
        l + subString.length,
        path.concat(subString)
      );
    }
  };
  backTracking(0, 0, []);
  return ret;
}

console.log(partition("a"));
