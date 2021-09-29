function reconstructQueue(people: number[][]): number[][] {
  const sorted = people.sort(([h1, k1], [h2, k2]) => {
    if (h1 !== h2) return h2 - h1;
    return k1 - k2;
  });
  const ret: number[][] = [];
  for (const p of sorted) {
    const [h, k] = p;
    ret.splice(k, 0, p);
  }
  return ret;
}
// [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
