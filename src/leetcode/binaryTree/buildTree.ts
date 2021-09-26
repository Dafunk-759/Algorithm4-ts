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
function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  if (inorder.length === 0 && postorder.length === 0)
    return null;
  const midNode = postorder.pop() as number;
  const midIndex = inorder.indexOf(midNode);
  const leftInOrder = inorder.slice(0, midIndex);
  const rightInOrder = inorder.slice(midIndex + 1);
  const leftPostOrder = postorder.slice(0, midIndex);
  const rightPostOrder = postorder.slice(midIndex);
  return new TreeNode(
    midNode,
    buildTree(leftInOrder, leftPostOrder),
    buildTree(rightInOrder, rightPostOrder)
  );
}

function buildTreePreIn(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length !== inorder.length)
    throw new Error("length should be same");
  if (inorder.length === 0) {
    return null;
  }
  const midNode = preorder[0];
  const midIndex = inorder.indexOf(midNode);
  const leftInOrder = inorder.slice(0, midIndex);
  const rightInOrder = inorder.slice(midIndex + 1);
  const leftPreOrder = preorder.slice(1, 1 + midIndex);
  const rightPreOrder = preorder.slice(1 + midIndex);
  return new TreeNode(
    midNode,
    buildTreePreIn(leftPreOrder, leftInOrder),
    buildTreePreIn(rightPreOrder, rightInOrder)
  );
}
buildTreePreIn([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
