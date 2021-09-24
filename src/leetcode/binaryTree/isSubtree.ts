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
function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean {
  const isSameTree = (
    left: TreeNode | null,
    right: TreeNode | null
  ): boolean => {
    if (left === null && right === null) return true;
    if (left === null && right !== null) return false;
    if (left !== null && right === null) return false;
    if ((left as TreeNode).val !== (right as TreeNode).val)
      return false;

    return (
      isSameTree(
        (left as TreeNode).left,
        (right as TreeNode).left
      ) &&
      isSameTree(
        (left as TreeNode).right,
        (right as TreeNode).right
      )
    );
  };
  const preOrder = (node: TreeNode | null): boolean => {
    if (node === null) return isSameTree(node, subRoot);
    if (isSameTree(node, subRoot)) return true;
    if (preOrder(node.left)) return true;
    if (preOrder(node.right)) return true;
    return false;
  };

  return preOrder(root);
}
