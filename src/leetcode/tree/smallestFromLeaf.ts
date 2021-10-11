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
const toChar = (n: number) => String.fromCharCode(n + 97);
const toPaths = (root: TreeNode | null): string[] => {
  if (root === null) return [];
  const ret: string[] = [];
  const dfs = (node: TreeNode, s: string): void => {
    if (node.left === null && node.right === null) {
      ret.push(toChar(node.val) + s);
      return;
    }
    if (node.left !== null)
      dfs(node.left, toChar(node.val) + s);
    if (node.right !== null)
      dfs(node.right, toChar(node.val) + s);
  };
  dfs(root, "");
  return ret;
};
const toMin = (a: string, b: string) => (a < b ? a : b);
function smallestFromLeaf(root: TreeNode | null): string {
  return toPaths(root).reduce(toMin);
}
