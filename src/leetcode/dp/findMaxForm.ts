interface Item {
  "0": number;
  "1": number;
}
interface Bag {
  [index: string]: number;
}
const consKey = (n0: number, n1: number) => `${n0},${n1}`;
const getZero = (key: string) => Number(key.split(",")[0]);
const getOne = (key: string) => Number(key.split(",")[1]);
const isGt = (max: string, item: Item): boolean => {
  return getZero(max) >= item[0] && getOne(max) >= item[1];
};
const sub = (max: string, item: Item): string => {
  return consKey(
    getZero(max) - item[0],
    getOne(max) - item[1]
  );
};
const make01Bag = (
  items: Item[],
  maxZero: number,
  maxOne: number
) => {
  const bag = items.map((item, index) => {
    const b: Bag = {};
    for (let m = 0; m <= maxZero; m++) {
      for (let n = 0; n <= maxOne; n++) {
        b[consKey(m, n)] = 0;
      }
    }
    return b;
  });
  for (const max in bag[0]) {
    if (isGt(max, items[0])) {
      bag[0][max] = 1;
    }
  }
  for (let i = 1; i < items.length; i++) {
    for (const max in bag[i]) {
      if (!isGt(max, items[i])) {
        bag[i][max] = bag[i - 1][max];
      } else {
        bag[i][max] = Math.max(
          bag[i - 1][max],
          bag[i - 1][sub(max, items[i])] + 1
        );
      }
    }
  }
  return bag;
};
//堆溢出 因为使用二维数组
function findMaxForm(
  strs: string[],
  m: number,
  n: number
): number {
  const items = strs.map((s) => {
    const zeroLen = Array.from(s).filter(
      (c) => c === "0"
    ).length;
    const oneLen = s.length - zeroLen;
    return {
      "0": zeroLen,
      "1": oneLen,
    };
  });
  const total = items.reduce(
    (acc, curr) => {
      acc[0] += curr[0];
      acc[1] += curr[1];
      return acc;
    },
    { "0": 0, "1": 0 }
  );
  // m = Math.min(total[0], m);
  // n = Math.min(total[1], n);
  const bag = make01Bag(items, m, n);
  return bag[bag.length - 1][consKey(m, n)];
}

function findMaxFormO(
  strs: string[],
  m: number,
  n: number
): number {
  const bag = new Array(m + 1)
    .fill(0)
    .map((_) => new Array(n + 1).fill(0));
  const items = strs.map((s) => {
    const zeroLen = Array.from(s).filter(
      (c) => c === "0"
    ).length;
    const oneLen = s.length - zeroLen;
    return {
      "0": zeroLen,
      "1": oneLen,
    };
  });
  for (const item of items) {
    for (let i = m; i >= item[0]; i--) {
      for (let j = n; j >= item[1]; j--) {
        bag[i][j] = Math.max(
          bag[i][j],
          bag[i - item[0]][j - item[1]] + 1
        );
      }
    }
  }
  return bag[m][n];
}
findMaxForm(
  [
    "0",
    "1101",
    "01",
    "00111",
    "1",
    "10010",
    "0",
    "0",
    "00",
    "1",
    "11",
    "0011",
  ],
  63,
  36
);
