interface Item {
  n: number;
  count: number;
}
const toItem = (count: number, n: number): Item => ({
  n,
  count,
});
const gt0 = (item: Item) => item.count > 0;
const toSum = (sum: number, item: Item) =>
  sum + item.n * item.count;
const toCount = (count: number, item: Item) =>
  count + item.count;
const toMode = (acc: Item, item: Item) => {
  if (acc.count < item.count) return item;
  return acc;
};
const findIndex = (data: Item[]) => (index: number) => {
  let end = 0;
  for (const item of data) {
    end += item.count;
    if (index <= end) return item.n;
  }
  throw new Error("index overflow");
};
const findMid = (allCount: number, data: Item[]) => {
  const findIndexInData = findIndex(data);
  const mid = allCount >> 1;
  if (allCount % 2 === 1) {
    return findIndexInData(mid + 1);
  }
  return (
    (findIndexInData(mid) + findIndexInData(mid + 1)) / 2
  );
};
const sampleStats = (count: number[]): number[] => {
  const data = count.map(toItem).filter(gt0);
  const sum = data.reduce(toSum, 0);
  const allCount = data.reduce(toCount, 0);

  const min = data[0].n;
  const max = data[data.length - 1].n;
  const aver = sum / allCount;
  const mid = findMid(allCount, data);
  const mode = data.reduce(toMode).n;
  return [min, max, aver, mid, mode];
};
