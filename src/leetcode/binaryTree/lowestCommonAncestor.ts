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
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right !== null) {
    return right;
  }
  if (left !== null && right === null) {
    return left;
  }
  if (left !== null && right !== null) {
    return root;
  }
  if (left === null && right === null) {
    return null;
  }
  throw new Error("err");
}
function lowestCommonAncestorBinarySearchTree(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  const min = p.val < q.val ? p.val : q.val;
  const max = p.val > q.val ? p.val : q.val;
  const find = (node: TreeNode | null): TreeNode | null => {
    if (
      node === null ||
      (node.val <= max && node.val >= min)
    ) {
      return node;
    }
    if (node.val > max) {
      return find(node.left);
    }
    if (node.val < min) {
      return find(node.right);
    }
    throw new Error("err");
  };
  return find(root);
}
