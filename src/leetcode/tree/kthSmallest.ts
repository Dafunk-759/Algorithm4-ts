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
//return void
function kthSmallestVoid(
  root: TreeNode | null,
  k: number
): number {
  let ret: number;
  const inOrder = (node: TreeNode | null): void => {
    if (ret !== undefined) return;
    if (node === null) return;
    inOrder(node.left);
    if (k === 1) {
      ret = node.val;
    }
    k -= 1;
    inOrder(node.right);
  };
  inOrder(root);
  return ret;
}
function* inOrderStream(
  node: TreeNode
): Generator<number, void, unknown> {
  if (node.left !== null) {
    yield* inOrderStream(node.left);
  }
  yield node.val;
  if (node.right !== null) {
    yield* inOrderStream(node.right);
  }
}
function kthSmallest(
  root: TreeNode | null,
  k: number
): number {
  if (root === null) throw new Error("bad root");
  for (const value of inOrderStream(root)) {
    if (k === 1) return value;
    k -= 1;
  }
  throw new Error("k should <= n");
}
