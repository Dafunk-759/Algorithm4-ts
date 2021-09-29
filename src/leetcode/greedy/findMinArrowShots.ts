function findMinArrowShots(points: number[][]): number {
  const sorted = points.sort(
    ([start1, end1], [start2, end2]) => end2 - end1
  );
  let arrowPoint: number = sorted.pop()[1],
    count = 1;
  while (sorted.length > 0) {
    const [start, end] = sorted.pop();
    if (arrowPoint < start) {
      arrowPoint = end;
      count += 1;
    }
  }
  return count;
}
