//#349. 两个数组的交集

import * as util from "../../util/indexNode.js";

function makeSet(nums: number[]): Set<number> {
  return nums.reduce(
    (set, curr) => set.add(curr),
    new Set<number>()
  );
}

function getIntersection(
  otherSet: Set<number>,
  nums: number[]
): Set<number> {
  return nums.reduce((inter, curr) => {
    if (otherSet.has(curr)) {
      inter.add(curr);
    }
    return inter;
  }, new Set<number>());
}

function intersection(
  nums1: number[],
  nums2: number[]
): number[] {
  return Array.from(getIntersection(makeSet(nums1), nums2));
}

util.test(intersection, [2], [1, 2, 2, 1], [2, 2]);
util.test(intersection, [9, 4], [4, 9, 5], [9, 4, 9, 8, 4]);
