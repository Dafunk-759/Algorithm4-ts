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
const isParent = (
  target: number,
  node: TreeNode
): boolean =>
  (node.left !== null && node.left.val === target) ||
  (node.right !== null && node.right.val === target);

function isCousins(
  root: TreeNode | null,
  x: number,
  y: number
): boolean {
  let xP: TreeNode | null = null;
  let yP: TreeNode | null = null;
  let xDepth: number = -1;
  let yDepth: number = -1;

  const dfs = (
    node: TreeNode | null,
    depth: number
  ): void => {
    if (node === null) return;
    if (isParent(x, node)) {
      xP = node;
      xDepth = depth + 1;
    }
    if (isParent(y, node)) {
      yP = node;
      yDepth = depth + 1;
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs(root, 0);
  if (xP === null || yP === null) return false;
  if (xDepth === -1 || yDepth === -1) return false;
  return xDepth === yDepth && xP !== yP;
}
