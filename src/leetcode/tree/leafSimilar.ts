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
const toLeafs = (node: TreeNode | null): number[] => {
  const ret: number[] = [];
  const dfs = (node: TreeNode | null): void => {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      ret.push(node.val);
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(node);
  return ret;
};
function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  const leafs1 = toLeafs(root1);
  const leafs2 = toLeafs(root2);
  if (leafs1.length !== leafs2.length) return false;
  for (let i = 0; i < leafs1.length; i++) {
    if (leafs1[i] !== leafs2[i]) return false;
  }
  return true;
}
