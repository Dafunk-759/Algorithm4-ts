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
interface Path {
  canConnect: number;
  notConnect: number;
}
const postorder = (node: TreeNode | null): Path => {
  if (node === null)
    return {
      canConnect: 0,
      notConnect: 0,
    };
  const left = postorder(node.left);
  const right = postorder(node.right);
  const canConnect =
    Math.max(left.canConnect, right.canConnect) + 1;
  const notConnect = Math.max(
    left.notConnect,
    right.notConnect,
    left.canConnect + right.canConnect + 2
  );
  return {
    canConnect,
    notConnect,
  };
};
function diameterOfBinaryTree(
  root: TreeNode | null
): number {
  return postorder(root).notConnect - 2;
}
