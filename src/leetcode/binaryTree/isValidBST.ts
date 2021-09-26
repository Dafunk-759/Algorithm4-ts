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
//中序
function isValidBST(root: TreeNode | null): boolean {
  const inOrder = (node: TreeNode | null): number[] => {
    if (node === null) return [];
    return [
      ...inOrder(node.left),
      node.val,
      ...inOrder(node.right),
    ];
  };
  const isIncremental = (
    index: number,
    arr: number[]
  ): boolean => {
    if (index >= arr.length) return true;
    if (arr[index] <= arr[index - 1]) return false;
    return isIncremental(index + 1, arr);
  };
  return isIncremental(1, inOrder(root));
}
//后序
function isValidBSTPost(root: TreeNode | null): boolean {
  const isValid = (
    node: TreeNode | null,
    lower: number,
    upper: number
  ): boolean => {
    if (node === null) return true;
    if (node.val <= lower || node.val >= upper)
      return false;
    return (
      isValid(node.left, lower, node.val) &&
      isValid(node.right, node.val, upper)
    );
  };
  return isValid(
    root,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY
  );
}
