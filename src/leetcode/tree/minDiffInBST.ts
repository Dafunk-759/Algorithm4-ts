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

function minDiffInBST(root: TreeNode | null): number {
  let ret = Number.POSITIVE_INFINITY;
  let pre: number | null = null;
  const inorder = (node: TreeNode | null) => {
    if (node === null) return;
    inorder(node.left);
    if (pre === null) {
      pre = node.val;
    } else {
      ret = Math.min(ret, node.val - pre);
      pre = node.val;
    }
    inorder(node.right);
  };
  inorder(root);
  if (ret === Number.POSITIVE_INFINITY)
    throw new Error("bad BST");
  return ret;
}
