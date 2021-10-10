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

const isSame = (
  arr1: number[],
  arr2: number[]
): boolean => {
  if (arr1.length !== arr2.length)
    throw new Error("length should same");
  const set = new Set(arr1);
  return arr2.every((item) => set.has(item));
};
const partial = (
  preorder: number[],
  postorder: number[]
) => {
  let mid = 1;
  while (
    !isSame(preorder.slice(0, mid), postorder.slice(0, mid))
  )
    mid += 1;
  return {
    leftPreorder: preorder.slice(0, mid),
    leftPostorder: postorder.slice(0, mid),
    rightPreorder: preorder.slice(mid),
    rightPostorder: postorder.slice(mid),
  };
};
const partial2 = (
  preorder: number[],
  postorder: number[]
) => {
  let mid = 1;
  if (preorder.length > 0) {
    mid = postorder.indexOf(preorder[0]) + 1;
  }
  return {
    leftPreorder: preorder.slice(0, mid),
    leftPostorder: postorder.slice(0, mid),
    rightPreorder: preorder.slice(mid),
    rightPostorder: postorder.slice(mid),
  };
};
function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  if (preorder.length !== postorder.length)
    throw new Error("length should same");
  const N = preorder.length;
  if (N <= 0) return null;
  const root = preorder[0];
  const {
    leftPreorder,
    leftPostorder,
    rightPreorder,
    rightPostorder,
  } = partial2(preorder.slice(1), postorder.slice(0, -1));
  return new TreeNode(
    root,
    constructFromPrePost(leftPreorder, leftPostorder),
    constructFromPrePost(rightPreorder, rightPostorder)
  );
}
