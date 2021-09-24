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
function inorderTraversalRecursive(
  root: TreeNode | null
): number[] {
  const mapToArr = (node: TreeNode | null): number[] =>
    node === null
      ? []
      : [
          ...mapToArr(node.left),
          node.val,
          ...mapToArr(node.right),
        ];
  return mapToArr(root);
}
//特殊迭代法
function inorderTraversalIter(
  root: TreeNode | null
): number[] {
  const iter = (
    stack: TreeNode[],
    curr: TreeNode | null,
    ret: number[]
  ): number[] => {
    if (curr === null && stack.length === 0) return ret;
    if (curr !== null) {
      stack.push(curr);
      return iter(stack, curr.left, ret);
    }
    const next = stack.pop() as TreeNode;
    ret.push(next.val);
    return iter(stack, next.right, ret);
  };
  return iter([], root, []);
}
//统一迭代法
function inorderIter(root: TreeNode | null): number[] {
  if (root === null) return [];
  const iter = (
    stack: (TreeNode | null)[],
    ret: number[]
  ): number[] => {
    if (stack.length === 0) return ret;
    const node = stack.pop() as TreeNode | null;
    if (node !== null) {
      if (node.right !== null) {
        stack.push(node.right);
      }
      stack.push(node);
      stack.push(null);
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
