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
function insertIntoBST(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (root === null) {
    return new TreeNode(val);
  }
  const insert = (node: TreeNode, val: number): void => {
    if (val < node.val) {
      if (node.left === null) {
        node.left = new TreeNode(val);
        return;
      }
      if (node.left !== null) {
        return insert(node.left, val);
      }
    }
    if (val > node.val) {
      if (node.right === null) {
        node.right = new TreeNode(val);
        return;
      }
      if (node.right !== null) {
        return insert(node.right, val);
      }
    }
  };
  insert(root, val);
  return root;
}
