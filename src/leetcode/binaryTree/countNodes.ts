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

//遍历法
function countNodesPostOrder(
  root: TreeNode | null
): number {
  if (root === null) return 0;
  return (
    1 +
    countNodesPostOrder(root.left) +
    countNodesPostOrder(root.right)
  );
}

//公式法
const getSideHeight =
  (side: "left" | "right") =>
  (node: TreeNode | null): number => {
    const loop = (
      node: TreeNode | null,
      height: number
    ): number => {
      if (node === null) return height;
      return loop(node[side], height + 1);
    };
    return loop(node, 1);
  };
function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  const leftHeight = getSideHeight("left")(root.left),
    rightHeight = getSideHeight("right")(root.right);
  if (leftHeight === rightHeight) {
    return 2 ** leftHeight - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
}
