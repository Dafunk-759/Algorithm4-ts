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
//force
const toMaxAbs = (
  nodeVal: number,
  ancestors: number[]
): number => {
  const toAbs = (a: number) => Math.abs(a - nodeVal);
  const toMax = (a: number, b: number) => Math.max(a, b);
  return ancestors.map(toAbs).reduce(toMax, 0);
};
function maxAncestorDiff(root: TreeNode | null): number {
  let ret = 0;
  const dfs = (
    node: TreeNode | null,
    ancestors: number[]
  ): void => {
    if (node === null) return;
    ret = Math.max(ret, toMaxAbs(node.val, ancestors));
    dfs(node.left, ancestors.concat(node.val));
    dfs(node.right, ancestors.concat(node.val));
  };
  dfs(root, []);
  return ret;
}
//仅维护路径中的最大最小值
function maxAncestorDiffMin(root: TreeNode | null): number {
  const dfs = (
    node: TreeNode | null,
    min: number,
    max: number
  ): number => {
    if (node === null) return max - min;
    return Math.max(
      dfs(
        node.left,
        Math.min(node.val, min),
        Math.max(node.val, max)
      ),
      dfs(
        node.right,
        Math.min(node.val, min),
        Math.max(node.val, max)
      )
    );
  };
  return dfs(
    root,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY
  );
}
