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
function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  const compare = (
    left: TreeNode | null,
    right: TreeNode | null
  ): boolean => {
    if (left === null && right === null) return true;
    if (left === null && right !== null) return false;
    if (left !== null && right === null) return false;
    if ((left as TreeNode).val !== (right as TreeNode).val)
      return false;

    return (
      compare(
        (left as TreeNode).left,
        (right as TreeNode).right
      ) &&
      compare(
        (left as TreeNode).right,
        (right as TreeNode).left
      )
    );
  };
  return compare(root.left, root.right);
}

export {}