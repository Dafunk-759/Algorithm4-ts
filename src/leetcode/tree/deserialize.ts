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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const inOrder = (node: TreeNode | null): string => {
    if (node === null) return "null";
    return `${inOrder(node.left)}.${node.val}.${inOrder(
      node.right
    )}`;
  };
  const preOrder = (node: TreeNode | null): string => {
    if (node === null) return "null";
    return `${node.val}.${preOrder(node.left)}.${preOrder(
      node.right
    )}`;
  };
  return `${inOrder(root)},${preOrder(root)}`;
}

/*
 * Decodes your encoded data to tree.
 */
const consTree = (
  inorder: number[],
  preorder: number[]
): TreeNode | null => {
  const len = inorder.length;
  if (len === 0) return null;
  const rootVal = preorder[0];
  const mid = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, mid);
  const leftPreorder = preorder.slice(1, 1 + mid);
  const rightInorder = inorder.slice(mid + 1);
  const rightPreorder = preorder.slice(1 + mid);
  return new TreeNode(
    rootVal,
    consTree(leftInorder, leftPreorder),
    consTree(rightInorder, rightPreorder)
  );
};
function deserialize(data: string): TreeNode | null {
  const [inorder, preorder] = data.split(",").map((raw) =>
    raw
      .split(".")
      .filter((item) => item !== "null")
      .map((item) => Number(item))
  );
  return consTree(inorder, preorder);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
