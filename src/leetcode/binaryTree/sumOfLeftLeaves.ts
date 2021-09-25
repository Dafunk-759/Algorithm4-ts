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

function sumOfLeftLeaves(root: TreeNode | null): number {
  const postOrder = (
    node: TreeNode | null,
    direct: "left" | "right"
  ): number => {
    if (node === null) return 0;
    if (
      node.left === null &&
      node.right === null &&
      direct === "left"
    ) {
      return node.val;
    }
    return (
      postOrder(node.left, "left") +
      postOrder(node.right, "right")
    );
  };
  return postOrder(root, "right");
}
