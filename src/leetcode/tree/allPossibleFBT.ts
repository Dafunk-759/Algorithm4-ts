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
const toNode = (
  left: TreeNode | null,
  right: TreeNode | null
): TreeNode => new TreeNode(0, left, right);
const oddList = (n: number) =>
  n <= 0
    ? []
    : new Array(n).fill(0).map((_, i) => 2 * i + 1);
function allPossibleFBTFunc(
  n: number
): Array<TreeNode | null> {
  return n === 1
    ? [toNode(null, null)]
    : oddList((n - 1) >> 1).flatMap((i) =>
        allPossibleFBTFunc(i).flatMap((leftChild) =>
          allPossibleFBTFunc(n - 1 - i).map((rightChild) =>
            toNode(leftChild, rightChild)
          )
        )
      );
}
function allPossibleFBT(n: number): Array<TreeNode | null> {
  if (n === 1) return [new TreeNode(0)];
  const ret: TreeNode[] = [];
  for (let i = 1; i < n - 1; i += 2) {
    const left = allPossibleFBT(i);
    const right = allPossibleFBT(n - 1 - i);
    for (const leftChild of left) {
      for (const rightChild of right) {
        ret.push(new TreeNode(0, leftChild, rightChild));
      }
    }
  }
  return ret;
}
