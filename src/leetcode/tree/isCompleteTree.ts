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
const toLevelOrder = (root: TreeNode): TreeNode[] => {
  const queue: TreeNode[] = [root];
  const ret: TreeNode[] = [];
  while (queue.length > 0) {
    const N = queue.length;
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode;
      ret.push(node);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return ret;
};
function isCompleteTree(root: TreeNode): boolean {
  const levelOrder = toLevelOrder(root);
  for (let i = 0; 2 * i + 1 < levelOrder.length; i++) {
    const node = levelOrder[i];
    if (node.left !== levelOrder[2 * i + 1]) return false;
    if (2 * i + 2 >= levelOrder.length) {
      if (node.right !== null) return false;
    } else {
      if (node.right !== levelOrder[2 * i + 2])
        return false;
    }
  }
  return true;
}
