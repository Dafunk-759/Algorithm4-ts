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
function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null && root2 === null) return null;
  if (root1 === null && root2 !== null) return root2;
  if (root1 !== null && root2 === null) return root1;

  return new TreeNode(
    (root1 as TreeNode).val + (root2 as TreeNode).val,
    mergeTrees(
      (root1 as TreeNode).left,
      (root2 as TreeNode).left
    ),
    mergeTrees(
      (root1 as TreeNode).right,
      (root2 as TreeNode).right
    )
  );
}
