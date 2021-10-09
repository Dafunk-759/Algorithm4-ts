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

function pruneTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  const left = pruneTree(root.left);
  const right = pruneTree(root.right);
  if (left === null && right === null && root.val === 0)
    return null;
  root.left = left;
  root.right = right;
  return root;
}
