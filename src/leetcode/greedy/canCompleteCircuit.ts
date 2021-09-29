//force
function canCompleteCircuit(
  gas: number[],
  cost: number[]
): number {
  const add1Loop = (n: number): number =>
    (n + 1) % gas.length;
  for (let start = 0; start < gas.length; start++) {
    let curr = start,
      oilBox = 0;
    while (true) {
      oilBox += gas[curr];
      if (oilBox < cost[curr]) break;
      oilBox -= cost[curr];
      curr = add1Loop(curr);
      if (curr === start) return curr;
    }
  }
  return -1;
}
//greedy
function canCompleteCircuitG(
  gas: number[],
  cost: number[]
): number {
  const makeRestArr = (
    gas: number[],
    cost: number[]
  ): number[] => {
    return gas.map((g, i) => g - cost[i]);
  };
  const rest = makeRestArr(gas, cost);
  const sum = rest.reduce((acc, curr) => acc + curr, 0);
  if (sum < 0) return -1;
  const makeReducer = () => {
    let currSum = 0;
    return (
      start: number,
      rest: number,
      index: number
    ): number => {
      currSum += rest;
      if (currSum < 0) {
        currSum = 0;
        start = index + 1;
      }
      return start;
    };
  };
  return rest.reduce(makeReducer(), 0);
  // let currSum = 0,
  //   totalSum = 0,
  //   start = 0;
  // for (let i = 0; i < rest.length; i++) {
  //   currSum += rest[i];
  //   totalSum += rest[i];
  //   if (currSum < 0) {
  //     start = i + 1;
  //     currSum = 0;
  //   }
  // }
  // if (totalSum < 0) return -1;
  // return start;
}
