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
const toLevelOrder = (
  node: TreeNode
): (TreeNode | null)[][] => {
  const queue: (TreeNode | null)[] = [node];
  const ret: (TreeNode | null)[][] = [];
  while (queue.length > 0) {
    const N = queue.length;
    const currLevel: (TreeNode | null)[] = [];
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode | null;
      currLevel.push(node);
      if (node !== null) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    ret.push(currLevel);
  }
  return ret;
};
function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  if (root === null) throw new Error("bad root");
  const levelOrder = toLevelOrder(root);
  const maxDepth = levelOrder.length - 1;
  if (depth < 1 || depth > maxDepth + 1)
    throw new Error("bad depth");
  if (depth === 1) {
    root = new TreeNode(val, root, null);
  } else {
    const parentLevel = levelOrder[depth - 2];
    const childLevel = levelOrder[depth - 1];
    for (
      let i = 0, j = 0;
      i < parentLevel.length && j < childLevel.length;
      i++
    ) {
      const parent = parentLevel[i];
      if (parent === null) continue;
      const leftChild = childLevel[j];
      const rightChild = childLevel[j + 1];
      parent.left = new TreeNode(val, leftChild, null);
      parent.right = new TreeNode(val, null, rightChild);
      j += 2;
    }
  }
  console.log(root);
  return root;
}
