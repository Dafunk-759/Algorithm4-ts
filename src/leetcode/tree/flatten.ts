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
const getRightCorner = (node: TreeNode): TreeNode => {
  while (node.right !== null) node = node.right;
  return node;
};
function flatten(root: TreeNode | null): void {
  if (root === null) return;
  if (root.left === null && root.right === null) return;
  flatten(root.left);
  flatten(root.right);
  if (root.left === null && root.right !== null) {
    return;
  }
  if (root.left !== null && root.right === null) {
    root.right = root.left;
    root.left = null;
    return;
  }
  if (root.left !== null && root.right !== null) {
    getRightCorner(root.left).right = root.right;
    root.right = root.left;
    root.left = null;
    return;
  }
  throw new Error("never");
}
