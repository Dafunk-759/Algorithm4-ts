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
const end = (arr: number[]): number =>
  arr.length <= 0 ? 0 : arr[arr.length - 1];
const postorder = (node: TreeNode | null): number[] => {
  if (node === null) return [];
  const left = postorder(node.left);
  const right = postorder(node.right);
  const currNode = node.val + end(left) + end(right);
  return left.concat(right).concat(currNode);
};
const format = (arr: number[]): number[] => {
  if (arr.length <= 0) return [];
  const sorted = arr.sort((a, b) => a - b);
  const ret: number[] = [sorted[0]];
  let count = 1;
  let max = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      count += 1;
    } else {
      count = 1;
    }
    if (count === max) ret.push(sorted[i]);
    else if (count > max) {
      max = count;
      ret.length = 0;
      ret.push(sorted[i]);
    }
  }
  return ret;
};
function findFrequentTreeSum(
  root: TreeNode | null
): number[] {
  return format(postorder(root));
}
