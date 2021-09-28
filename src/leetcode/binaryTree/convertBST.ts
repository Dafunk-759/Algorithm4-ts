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
function convertBST(
  root: TreeNode | null,
): TreeNode | null {
  let sum = 0;
  const travel = (node: TreeNode | null): void => {
    if (node === null) return;
    travel(node.right);
    node.val = sum + node.val;
    sum = node.val;
    travel(node.left);
  };
  travel(root);
  return root;
}
