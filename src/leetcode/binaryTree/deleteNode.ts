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
const getLeftEnd = (node: TreeNode): TreeNode => {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
};
function deleteNode(
  root: TreeNode | null,
  key: number
): TreeNode | null {
  if (root === null) {
    return null;
  }
  if (root.val === key) {
    if (root.left !== null && root.right === null) {
      return root.left;
    }
    if (root.right !== null && root.left === null) {
      return root.right;
    }
    if (root.left === null && root.right === null) {
      return null;
    }
    if (root.left !== null && root.right !== null) {
      getLeftEnd(root.right).left = root.left;
      return root.right;
    }
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
}
