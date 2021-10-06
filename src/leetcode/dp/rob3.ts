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
interface ReturnValue {
  take: number;
  notTake: number;
}
function rob(root: TreeNode | null): number {
  const postOrder = (
    node: TreeNode | null
  ): ReturnValue => {
    if (node === null) {
      return {
        take: 0,
        notTake: 0,
      };
    }
    const left = postOrder(node.left);
    const right = postOrder(node.right);
    return {
      take: node.val + left.notTake + right.notTake,
      notTake:
        Math.max(left.notTake, left.take) +
        Math.max(right.take, right.notTake),
    };
  };
  const ret = postOrder(root);
  return Math.max(ret.notTake, ret.take);
}
