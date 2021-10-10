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

function increasingBST(
  root: TreeNode | null
): TreeNode | null {
  let newRoot: TreeNode | null = null;
  let newPre: TreeNode | null = null;
  const inorder = (node: TreeNode | null): void => {
    if (node === null) return;
    inorder(node.left);
    if (newPre === null) {
      newPre = new TreeNode(node.val);
      newRoot = newPre;
    } else {
      newPre.right = new TreeNode(node.val);
      newPre = newPre.right;
    }
    inorder(node.right);
  };
  inorder(root);
  return newRoot;
}
