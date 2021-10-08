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
const findTargetOne = (
  root: TreeNode | null,
  target: number
): TreeNode | null => {
  if (root === null) return null;

  if (root.val === target) return root;
  if (root.val > target)
    return findTargetOne(root.left, target);
  return findTargetOne(root.right, target);
};
function findTarget(
  root: TreeNode | null,
  k: number
): boolean {
  const dfs = (node: TreeNode | null): boolean => {
    if (node === null) return false;
    if (dfs(node.left)) return true;
    if (dfs(node.right)) return true;

    const target = k - node.val;
    const targetNode = findTargetOne(root, target);
    if (targetNode !== null && targetNode !== node)
      return true;
    return false;
  };
  return dfs(root);
}
