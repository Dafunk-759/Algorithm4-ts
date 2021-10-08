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
const stringify = (node: TreeNode | null): string => {
  if (node === null) return "#";
  return `${node.val},${stringify(node.left)},${stringify(
    node.right
  )}`;
};
function findDuplicateSubtrees(
  root: TreeNode | null
): Array<TreeNode | null> {
  const retMap = new Map<string, TreeNode | null>();
  const dfs = (root: TreeNode | null): void => {
    if (root === null) return;
    const key = stringify(root);
    if (retMap.has(key)) {
      retMap.set(key, root);
    } else {
      retMap.set(key, null);
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return Array.from(retMap.values()).filter(
    (value) => value !== null
  );
}
