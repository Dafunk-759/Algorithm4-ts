const removeInterval = (
  currIndex: number,
  nextIndex: number,
  sorted: number[][]
) => {
  const currEnd = sorted[currIndex][1];
  while (true) {
    if (nextIndex >= sorted.length) break;
    const nextStart = sorted[nextIndex][0];
    if (nextStart >= currEnd) break;
    nextIndex += 1;
  }
  return nextIndex;
};
const sortByEnd = (arr: number[][]) =>
  arr.sort(([start1, end1], [start2, end2]) => end1 - end2);
function eraseOverlapIntervals(
  intervals: number[][]
): number {
  const sorted = sortByEnd(intervals);
  let count = 0;
  for (
    let curr = 0, next = 1;
    curr < sorted.length - 1 && next < sorted.length;
    curr = next, next += 1
  ) {
    const nextIndex = removeInterval(curr, next, sorted);
    count += nextIndex - next;
    next = nextIndex;
  }
  return count;
}
