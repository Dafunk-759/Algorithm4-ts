const make01Bag = (maxV: number, items: number[]) => {
  const bag = new Array(items.length)
    .fill(0)
    .map((_) => new Array(maxV + 1).fill(0));
  for (let currV = 0; currV <= maxV; currV++) {
    if (currV >= items[0]) bag[0][currV] = items[0];
  }
  for (let i = 1; i < items.length; i++) {
    const weight = items[i];
    const value = items[i];
    for (let currV = 0; currV <= maxV; currV++) {
      if (currV < weight) bag[i][currV] = bag[i - 1][currV];
      else {
        bag[i][currV] = Math.max(
          bag[i - 1][currV],
          bag[i - 1][currV - weight] + value
        );
      }
    }
  }
  return bag;
};
function lastStoneWeightII(stones: number[]): number {
  const totalWeight = stones.reduce(
    (acc, curr) => acc + curr,
    0
  );
  const halfWeight = totalWeight >> 1;
  console.log(halfWeight);
  const bag01 = make01Bag(halfWeight, stones);
  console.log(bag01);
  return Math.abs(
    totalWeight - 2 * bag01[stones.length - 1][halfWeight]
  );
}
