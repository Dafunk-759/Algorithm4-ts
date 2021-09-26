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
//层序遍历
function findBottomLeftValue(
  root: TreeNode | null
): number {
  if (root === null) throw new Error("bad tree root");
  const queue: TreeNode[] = [root];
  let left: number = 0;
  while (queue.length > 0) {
    const N = queue.length;
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode;
      if (i === 0) left = node.val;
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
  return left;
}

function findBottomLeftValueRecursive(
  root: TreeNode | null
): number {
  if (root === null) throw new Error("bad tree root");
  let ret: number = root.val;
  let maxDepth: number = Number.NEGATIVE_INFINITY;
  const isLeafNode = (node: TreeNode) =>
    node.left === null && node.right === null;
  const backTracking = (
    node: TreeNode,
    depth: number
  ): void => {
    if (isLeafNode(node)) {
      if (depth > maxDepth) {
        maxDepth = depth;
        ret = node.val;
      }
      return;
    }
    if (node.left !== null) {
      backTracking(node.left, depth + 1);
    }
    if (node.right !== null) {
      backTracking(node.right, depth + 1);
    }
  };
  backTracking(root, 1);
  return ret;
}
