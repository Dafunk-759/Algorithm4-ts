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

function tree2str(root: TreeNode | null): string {
  if (root === null) return "";
  if (root.left === null && root.right === null) {
    return `${root.val}`;
  }
  if (root.left !== null && root.right === null) {
    return `${root.val}(${tree2str(root.left)})`;
  }
  return `${root.val}(${tree2str(root.left)})(${tree2str(
    root.right
  )})`;
}
