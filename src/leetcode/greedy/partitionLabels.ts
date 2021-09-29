const makeCharMap = (s: string): Map<string, number> => {
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    map.set(c, i);
  }
  return map;
};
function partitionLabels(s: string): number[] {
  const charToLastIndex = makeCharMap(s);
  const ret: number[] = [];
  for (
    let start = 0, end = 0;
    end < s.length;
    end += 1, start = end
  ) {
    let maxEnd = charToLastIndex.get(s.charAt(end));
    while (true) {
      if (end >= maxEnd) break;
      end += 1;
      maxEnd = Math.max(
        maxEnd,
        charToLastIndex.get(s.charAt(end))
      );
    }
    ret.push(end - start + 1);
  }
  return ret;
}
