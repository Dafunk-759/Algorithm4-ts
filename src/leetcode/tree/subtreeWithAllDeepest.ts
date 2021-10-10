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
const findDeepestNodes = (
  node: TreeNode | null
): Set<TreeNode> => {
  const ret = new Set<TreeNode>();
  let maxDepth = Number.NEGATIVE_INFINITY;
  const dfs = (
    node: TreeNode | null,
    depth: number
  ): void => {
    if (node === null) return;
    if (depth > maxDepth) {
      ret.clear();
      ret.add(node);
      maxDepth = depth;
    } else if (depth === maxDepth) {
      ret.add(node);
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs(node, 0);
  return ret;
};
interface Subtree {
  deepestNodeNum: number;
  node: TreeNode | null;
}
function subtreeWithAllDeepest(
  root: TreeNode | null
): TreeNode | null {
  const deepestNodes = findDeepestNodes(root);
  const searchSubtree = (
    node: TreeNode | null
  ): Subtree => {
    if (node === null)
      return {
        deepestNodeNum: 0,
        node: null,
      };
    const left = searchSubtree(node.left);
    const right = searchSubtree(node.right);
    if (left.node !== null) return left;
    if (right.node !== null) return right;
    const deepestNodeNum =
      left.deepestNodeNum +
      right.deepestNodeNum +
      (deepestNodes.has(node) ? 1 : 0);
    const subtree =
      deepestNodeNum === deepestNodes.size ? node : null;
    return {
      deepestNodeNum,
      node: subtree,
    };
  };
  return searchSubtree(root).node;
}
