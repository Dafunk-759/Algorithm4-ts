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
//统一递归法
function postorderTraversalRecursive(
  root: TreeNode | null
): number[] {
  const mapToArr = (node: TreeNode | null): number[] =>
    node === null
      ? []
      : [
          ...mapToArr(node.left),
          ...mapToArr(node.right),
          node.val,
        ];
  return mapToArr(root);
}
//特殊迭代法
function postorderTraversalIter(
  root: TreeNode | null
): number[] {
  const iter = (
    stack: (TreeNode | null)[],
    ret: number[]
  ): number[] => {
    if (stack.length === 0) return ret;
    const node = stack.pop() as TreeNode | null;
    if (node === null) return iter(stack, ret);
    ret.push(node.val);
    stack.push(node.left);
    stack.push(node.right);
    return iter(stack, ret);
  };
  return iter([root], []).reverse();
}
//统一迭代法
function postorderIter(root: TreeNode | null): number[] {
  if (root === null) return [];
  const iter = (
    stack: (TreeNode | null)[],
    ret: number[]
  ): number[] => {
    if (stack.length === 0) return ret;
    const node = stack.pop() as TreeNode | null;
    if (node !== null) {
      stack.push(node);
      stack.push(null);
      if (node.right !== null) {
        stack.push(node.right);
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
      return iter(stack, ret);
    }

    ret.push((stack.pop() as TreeNode).val);
    return iter(stack, ret);
  };
  return iter([root], []);
}
export {};
