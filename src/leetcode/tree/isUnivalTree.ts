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
function isUnivalTree(root: TreeNode): boolean {
  const dfs = (
    node: TreeNode | null,
    from: TreeNode
  ): boolean => {
    if (node === null) return true;
    return (
      from.val === node.val &&
      dfs(node.left, node) &&
      dfs(node.right, node)
    );
  };
  return dfs(root, root);
}
