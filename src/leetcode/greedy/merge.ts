const sortedByStart = (
  intervals: number[][]
): number[][] => {
  return intervals.sort(
    ([start1, end1], [start2, end2]) => start1 - start2
  );
};
const mergeInterval = (sorted: number[][]): number[][] => {
  for (
    let curr = 0, next = 1;
    next < sorted.length;
    curr = next, next += 1
  ) {
    //0:start, 1:end
    while (true) {
      if (next >= sorted.length) break;
      if (sorted[next][0] > sorted[curr][1]) break;
      sorted[curr][1] = Math.max(
        sorted[curr][1],
        sorted[next][1]
      );
      sorted[curr][0] = Math.min(
        sorted[curr][0],
        sorted[next][0]
      );
      next += 1;
    }
  }
  return sorted;
};
const collectRet = (
  mergedInterval: number[][]
): number[][] => {
  const ret: number[][] = [];
  return mergedInterval.reduce((ret, interval, index) => {
    if (index === 0) {
      ret.push(interval);
      return ret;
    }
    const top = ret[ret.length - 1];
    if (top[1] >= interval[1]) return ret;
    ret.push(interval);
    return ret;
  }, ret);
};
function merge(intervals: number[][]): number[][] {
  return collectRet(
    mergeInterval(sortedByStart(intervals))
  );
}
