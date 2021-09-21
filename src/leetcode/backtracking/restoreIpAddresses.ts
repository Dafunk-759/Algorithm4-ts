function restoreIpAddresses(s: string): string[] {
  const isPartValid = (s: string): boolean => {
    if (s === "0") return true;
    if (s.charAt(0) === "0") return false;
    const n = Number.parseInt(s);
    return n >= 1 && n <= 255;
  };
  const isFinish = (l: number) => l === s.length;
  const isSizeValid = (p: string[]) => p.length === 4;
  const isSizeOverflow = (p: string[]) => p.length > 4;
  const ret: string[] = [];
  const backTracking = (
    startIndex: number,
    l: number,
    path: string[]
  ): void => {
    if (isSizeOverflow(path)) return;
    if (isFinish(l) && isSizeValid(path)) {
      ret.push(path.join("."));
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      const sub = s.slice(startIndex, i + 1);
      if (!isPartValid(sub)) return;
      backTracking(i + 1, l + sub.length, path.concat(sub));
    }
  };

  backTracking(0, 0, []);
  return ret;
}

console.log(restoreIpAddresses("1111"));
