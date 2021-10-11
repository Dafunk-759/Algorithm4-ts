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
const toArr = (root: TreeNode | null): number[] => {
  if (root === null) return [];
  return [
    ...toArr(root.left),
    root.val,
    ...toArr(root.right),
  ];
};
const maxIndex = (arr: number[]): number => {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};
const consMaxTree = (arr: number[]): TreeNode | null => {
  if (arr.length <= 0) return null;
  const max = maxIndex(arr);
  return new TreeNode(
    arr[max],
    consMaxTree(arr.slice(0, max)),
    consMaxTree(arr.slice(max + 1))
  );
};
function insertIntoMaxTree(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  return consMaxTree(toArr(root).concat(val));
}
