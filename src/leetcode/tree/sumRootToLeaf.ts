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
const toInt = (binaryN: string) =>
  Number.parseInt(binaryN, 2);
function sumRootToLeaf(root: TreeNode | null): number {
  let sum = 0;
  if (root === null) return sum;
  const dfs = (node: TreeNode, path: string): void => {
    if (node.left === null && node.right === null) {
      sum += toInt(path + String(node.val));
      return;
    }
    if (node.left !== null)
      dfs(node.left, path + String(node.val));
    if (node.right !== null)
      dfs(node.right, path + String(node.val));
  };
  dfs(root, "");
  return sum;
}
