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
function sumNumbers(root: TreeNode | null): number {
  if(root === null) throw new Error("bad root");
  let ret: number = 0;
  const backtracking = (
    node: TreeNode,
    path: string
  ): void => {
    if(node.left === null && node.right === null) {
      ret += Number(path + String(node.val));
      return;
    }
    if(node.left !== null) {
      backtracking(node.left, path + String(node.val));
    }
    if(node.right !== null) {
      backtracking(node.right, path + String(node.val));
    }
  };
  backtracking(root, "");
  return ret;
}
