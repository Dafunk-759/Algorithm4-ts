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
interface PathSumSate {
  leftSum: number;
  rightSum: number;
  currMaxSum: number;
}
function maxPathSum(root: TreeNode | null): number {
  if (root === null) throw new Error("bad root");
  const postOrder = (
    node: TreeNode | null
  ): PathSumSate => {
    if (node === null) {
      return {
        leftSum: 0,
        rightSum: 0,
        currMaxSum: Number.NEGATIVE_INFINITY,
      };
    }
    const left = postOrder(node.left);
    const right = postOrder(node.right);
    const leftSum = Math.max(
      Math.max(left.leftSum, left.rightSum) + node.val,
      node.val
    );
    const rightSum = Math.max(
      Math.max(right.leftSum, right.rightSum) + node.val,
      node.val
    );
    const currMax = Math.max(
      leftSum + rightSum - node.val,
      leftSum,
      rightSum
    );
    const currMaxSum = Math.max(
      currMax,
      left.currMaxSum,
      right.currMaxSum
    );
    return {
      leftSum,
      rightSum,
      currMaxSum,
    };
  };
  const rootState = postOrder(root);
  return rootState.currMaxSum;
}
