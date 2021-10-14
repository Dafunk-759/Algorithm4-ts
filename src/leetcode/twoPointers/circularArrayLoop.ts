const add = (nums: number[]) => (k: number, from: number) =>
  (((from + k) % nums.length) + nums.length) % nums.length;
const makeGraph = (nums: number[]) => nums.map(add(nums));
const findCircle = (g: number[]) => {
  const ret = new Set<number>();
  for (let from = 0; from < g.length; from++) {
    const set = new Set<number>();
    for (let i = from; g[i] !== undefined; i = g[i]) {
      if (set.has(i)) {
        ret.add(i);
        break;
      }
      set.add(i);
    }
  }
  return Array.from(ret);
};
const collect = (g: number[]) => (start: number) => {
  const ret = [start];
  for (let i = g[start]; i !== start; i = g[i]) {
    ret.push(i);
  }
  return ret;
};
const signSame = (nums: number[], indexArr: number[]) => {
  const isPos = nums[indexArr[0]] > 0;
  const isSame = (i: number) => nums[i] > 0 === isPos;
  return indexArr.every(isSame);
};
const isValid = (nums: number[]) => (circle: number[]) =>
  circle.length > 1 && signSame(nums, circle);
function circularArrayLoop(nums: number[]): boolean {
  const g = makeGraph(nums);
  const circles = findCircle(g).map(collect(g));
  return circles.some(isValid(nums));
}
