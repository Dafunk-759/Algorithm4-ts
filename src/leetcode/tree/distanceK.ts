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

function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  const pMap = new Map<TreeNode, TreeNode>();
  const findParent = (node: TreeNode | null): void => {
    if (node === null) return;
    findParent(node.left);
    findParent(node.right);
    if (node.left !== null) pMap.set(node.left, node);
    if (node.right !== null) pMap.set(node.right, node);
    return;
  };
  findParent(root);
  const ans: number[] = [];
  const findAns = (
    node: TreeNode | null,
    level: number,
    from: TreeNode | null
  ): void => {
    if (node === null) return;
    if (level === k) {
      ans.push(node.val);
      return;
    }
    if (from !== node.left)
      findAns(node.left, level + 1, node);
    if (from !== node.right)
      findAns(node.right, level + 1, node);
    const parent = pMap.get(node);
    if (parent !== undefined && from !== parent)
      findAns(parent, level + 1, node);
  };
  findAns(target, 0, null);
  return ans;
}
