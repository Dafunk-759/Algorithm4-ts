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

function bstToGst(root: TreeNode | null): TreeNode | null {
  let pre = 0;
  const dfs = (node: TreeNode | null): void => {
    if (node === null) return;
    dfs(node.right);
    node.val += pre;
    pre = node.val;
    dfs(node.left);
  };
  dfs(root);
  return root;
}
