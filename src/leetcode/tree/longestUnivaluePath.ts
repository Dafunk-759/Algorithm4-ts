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
interface LongestUnivaluePath {
  canConnect: number;
  maxLength: number;
  nodeValue: number | null;
}
const connect = (
  node: TreeNode,
  side: LongestUnivaluePath
): number =>
  node.val === side.nodeValue ? side.canConnect + 1 : 0;
const postorder = (
  root: TreeNode | null
): LongestUnivaluePath => {
  if (root === null)
    return {
      canConnect: 0,
      maxLength: 0,
      nodeValue: null,
    };
  const left = postorder(root.left);
  const right = postorder(root.right);
  const connectLeft = connect(root, left);
  const connectRight = connect(root, right);
  const canConnect = Math.max(connectLeft, connectRight);
  const maxLength = Math.max(
    left.maxLength,
    right.maxLength,
    connectLeft + connectRight
  );
  return {
    canConnect,
    maxLength,
    nodeValue: root.val,
  };
};
function longestUnivaluePath(
  root: TreeNode | null
): number {
  return postorder(root).maxLength;
}
