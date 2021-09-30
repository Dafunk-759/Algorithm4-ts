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
const enum State {
  notCovered,
  watcher,
  covered,
}
function minCameraCover(root: TreeNode | null): number {
  let count = 0;
  const postOrder = (node: TreeNode | null): State => {
    if (node === null) return State.covered;
    const leftState = postOrder(node.left);
    const rightState = postOrder(node.right);
    if (
      leftState === State.notCovered ||
      rightState === State.notCovered
    ) {
      count += 1;
      return State.watcher;
    }
    if (
      leftState === State.watcher ||
      rightState === State.watcher
    ) {
      return State.covered;
    }
    return State.notCovered;
  };
  const rootState = postOrder(root);
  return rootState === State.notCovered ? count + 1 : count;
}
