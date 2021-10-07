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
const rootPath = (
  node: TreeNode,
  target: number
): number => {
  const nextTarget = target - node.val;
  if (node.left === null && node.right === null) {
    return nextTarget === 0 ? 1 : 0;
  }
  let ret = 0;
  if (node.left !== null)
    ret += rootPath(node.left, nextTarget);
  if (node.right !== null)
    ret += rootPath(node.right, nextTarget);
  if (nextTarget === 0) ret += 1;
  return ret;
};
function pathSum(
  root: TreeNode | null,
  targetSum: number
): number {
  if (root === null) return 0;
  let ret = 0;
  if (root.left !== null)
    ret += pathSum(root.left, targetSum);
  if (root.right !== null)
    ret += pathSum(root.right, targetSum);
  ret += rootPath(root, targetSum);
  return ret;
}
