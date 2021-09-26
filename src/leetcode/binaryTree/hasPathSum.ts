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

function hasPathSum(
  root: TreeNode | null,
  targetSum: number
): boolean {
  if (root === null) return false;
  const isLeaf = (node: TreeNode) =>
    node.left === null && node.right === null;
  const backTracking = (
    node: TreeNode,
    pathSum: number
  ): boolean => {
    if (isLeaf(node)) {
      return pathSum + node.val === targetSum;
    }
    if (node.left !== null) {
      if (backTracking(node.left, pathSum + node.val))
        return true;
    }
    if (node.right !== null) {
      if (backTracking(node.right, pathSum + node.val))
        return true;
    }
    return false;
  };
  return backTracking(root, 0);
}

function pathSum(
  root: TreeNode | null,
  targetSum: number
): number[][] {
  const ret: number[][] = [];
  if (root === null) return ret;
  const isLeaf = (node: TreeNode) =>
    node.left === null && node.right === null;
  const sum = (arr: number[]) =>
    arr.reduce((acc, curr) => acc + curr);
  const backTracking = (
    node: TreeNode,
    path: number[]
  ): void => {
    if (isLeaf(node)) {
      const newPath = path.concat(node.val);
      if (targetSum === sum(newPath)) ret.push(newPath);
      return;
    }
    if (node.left !== null) {
      backTracking(node.left, path.concat(node.val));
    }
    if (node.right !== null) {
      backTracking(node.right, path.concat(node.val));
    }
  };
  backTracking(root, []);
  return ret;
}
