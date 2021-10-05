const makeItems = (n:number) => {
  const ret:number[] = []
  for(let i = 1; i * i <= n; i++) {
    ret.push(i * i);
  }
  return ret;
}
const POS_INF = Number.POSITIVE_INFINITY;
function numSquares(n: number): number {
  const items = makeItems(n);
  const bag = new Array(n + 1).fill(POS_INF);
  bag[0] = 0;
  for(const item of items) {
    for(let v = 0; v <= n; v++) {
      if(v >= item) {
        bag[v] = Math.min(bag[v], bag[v - item] + 1);
      }
    }
  }
  const end = bag[bag.length - 1];
  return end === POS_INF ? -1 : end;
}
