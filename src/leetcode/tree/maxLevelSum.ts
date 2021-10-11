class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const toLevel = (root: TreeNode): number[] => {
  const q: TreeNode[] = [root];
  const ret: number[] = [];
  while (q.length > 0) {
    const N = q.length;
    let sum = 0;
    for (let i = 0; i < N; i++) {
      const node = q.shift() as TreeNode;
      sum += node.val;
      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
    }
    ret.push(sum);
  }
  return ret;
};
interface R {
  maxSum: number;
  ret: number;
}
const toMax = (acc: R, curr: number, i: number) =>
  curr > acc.maxSum ? { maxSum: curr, ret: i + 1 } : acc;
const findMaxLevel = (level: number[]): number =>
  level.reduce(toMax, {
    maxSum: Number.NEGATIVE_INFINITY,
    ret: 1,
  }).ret;
function maxLevelSum(root: TreeNode): number {
  return findMaxLevel(toLevel(root));
}
