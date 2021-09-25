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
function isBalanced(root: TreeNode | null): boolean {
  const postOrder = (node: TreeNode | null): number => {
    if (node === null) return 0;
    const left = postOrder(node.left);
    if (left === -1) return -1;
    const right = postOrder(node.right);
    if (right === -1) return -1;
    return Math.abs(left - right) <= 1
      ? 1 + Math.max(left, right)
      : -1;
  };
  return postOrder(root) === -1;
}
