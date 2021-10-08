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
interface Tilt {
  tilt: number;
  tiltSum: number;
  sum: number;
}
const postorder = (node: TreeNode | null): Tilt => {
  if (node === null)
    return {
      tilt: 0,
      tiltSum: 0,
      sum: 0,
    };
  const left = postorder(node.left);
  const right = postorder(node.right);
  const sum = left.sum + node.val + right.sum;
  const tilt = Math.abs(left.sum - right.sum);
  const tiltSum = left.tiltSum + tilt + right.tiltSum;
  return {
    tilt,
    tiltSum,
    sum,
  };
};
function findTilt(root: TreeNode | null): number {
  return postorder(root).tiltSum;
}
