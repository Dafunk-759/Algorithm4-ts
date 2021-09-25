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

function binaryTreePaths(root: TreeNode | null): string[] {
  const ret: string[] = [];
  if (root === null) return ret;
  const backTracking = (
    node: TreeNode,
    path: number[]
  ): void => {
    if (node.left === null && node.right === null) {
      ret.push(path.concat(node.val).join("->"));
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
