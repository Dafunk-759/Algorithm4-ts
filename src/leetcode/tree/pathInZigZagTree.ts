const toNormalOrder = (label: number): number[] => {
  const ret: number[] = [];
  for (let i = label; i > 0; i = i >> 1) {
    ret.push(i);
  }
  return ret.reverse();
};
const toReverse = (val: number, i: number): number =>
  2 ** i + 2 ** (i + 1) - 1 - val;
const shouldReverse = (n: number, len: number) =>
  n % 2 !== len % 2;
function pathInZigZagTree(label: number): number[] {
  const normal = toNormalOrder(label);
  const len = normal.length;
  return normal.map((val, i) =>
    shouldReverse(i + 1, len) ? toReverse(val, i) : val
  );
}
