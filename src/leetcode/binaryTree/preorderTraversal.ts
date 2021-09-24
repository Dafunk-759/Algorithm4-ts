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
function preorderTraversalRecursive(
  root: TreeNode | null
): number[] {
  const mapToArr = (node: TreeNode | null): number[] =>
    node === null
      ? []
      : [
          node.val,
          ...mapToArr(node.left),
          ...mapToArr(node.right),
        ];
  return mapToArr(root);
}
//特殊迭代法
function preorderTraversalIter(
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
    stack.push(node.right);
    stack.push(node.left);
    return iter(stack, ret);
  };
  return iter([root], []);
}
//统一迭代法
function preorderIter(root: TreeNode | null): number[] {
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
      if (node.left !== null) {
        stack.push(node.left);
      }
      stack.push(node);
      stack.push(null);
      return iter(stack, ret);
    }

    ret.push((stack.pop() as TreeNode).val);
    return iter(stack, ret);
  };
  return iter([root], []);
}

//n叉树
class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}
function preorder(root: Node | null): number[] {
  return root === null
    ? []
    : [
        root.val,
        ...root.children.flatMap((child) =>
          preorder(child)
        ),
      ];
}
export {};
