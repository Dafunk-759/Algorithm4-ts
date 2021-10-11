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
const makeMap = (root: TreeNode) => {
  const nodeToPath = new Map<TreeNode, number[]>();
  const setMap = (nodes: TreeNode[], sum: number): void => {
    for (const n of nodes) {
      if (nodeToPath.has(n)) {
        (nodeToPath.get(n) as number[]).push(sum);
      } else {
        nodeToPath.set(n, [sum]);
      }
    }
  };
  const dfs = (
    node: TreeNode,
    path: TreeNode[],
    sum: number
  ): void => {
    if (node.left === null && node.right === null) {
      sum += node.val;
      setMap(path.concat(node), sum);
    }
    if (node.left !== null)
      dfs(node.left, path.concat(node), sum + node.val);
    if (node.right !== null)
      dfs(node.right, path.concat(node), sum + node.val);
  };
  dfs(root, [], 0);
  return nodeToPath;
};
const findDelNodes = (
  map: Map<TreeNode, number[]>,
  limit: number
): Set<TreeNode> => {
  const set = new Set<TreeNode>();
  for (const [node, sums] of map) {
    if (sums.every((s) => s < limit)) {
      set.add(node);
    }
  }
  return set;
};
const delNode = (
  root: TreeNode,
  delNodes: Set<TreeNode>
): TreeNode | null => {
  const dfs = (node: TreeNode | null): TreeNode | null => {
    if (node === null) return null;
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    if (delNodes.has(node)) return null;
    return node;
  };
  return dfs(root);
};
function sufficientSubset(
  root: TreeNode,
  limit: number
): TreeNode | null {
  return delNode(root, findDelNodes(makeMap(root), limit));
}
