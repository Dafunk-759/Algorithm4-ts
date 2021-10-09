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

function findSecondMinimumValue(
  root: TreeNode | null
): number {
  if (root === null) throw new Error("bad root");
  const dfs = (root: TreeNode): number => {
    if (root.left === null && root.right === null)
      return -1;
    if (root.left !== null && root.right !== null) {
      const left = lookup(root, root.left);
      const right = lookup(root, root.right);
      if (left === -1 && right === -1) return -1;
      if (left === -1 && right !== -1) return right;
      if (left !== -1 && right === -1) return left;
      return Math.min(left, right);
    }
    throw new Error("never");
  };
  const lookup = (
    parent: TreeNode,
    child: TreeNode
  ): number => {
    if (parent.val === child.val) return dfs(child);
    return child.val;
  };
  return dfs(root);
}
