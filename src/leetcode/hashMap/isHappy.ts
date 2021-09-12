//#第202题. 快乐数

import * as util from "../../util/indexNode.js";

function isHappy(n: number): boolean {
  return recurse(n, new Set<number>());
}

function recurse(n: number, set: Set<number>): boolean {
  if (n === 1) return true;
  if (set.has(n)) {
    return false;
  }
  set.add(n);
  return recurse(getNext(n), set);
}

function getNext(n: number) {
  return String(n)
    .split("")
    .map((s) => Number(s))
    .reduce((acc, curr) => acc + curr ** 2, 0);
}

util.test(isHappy, true, 19);
util.test(isHappy, false, 2);
util.test(isHappy, true, 7);
