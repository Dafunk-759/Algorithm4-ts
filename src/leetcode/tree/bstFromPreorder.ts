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

const leftSubTree = (preorder: number[]): number[] =>
  preorder.filter((v) => v < preorder[0]);
const rightSubTree = (preorder: number[]): number[] =>
  preorder.filter((v) => v > preorder[0]);
function bstFromPreorder(
  preorder: number[]
): TreeNode | null {
  if (preorder.length === 0) return null;
  return new TreeNode(
    preorder[0],
    bstFromPreorder(leftSubTree(preorder)),
    bstFromPreorder(rightSubTree(preorder))
  );
}
