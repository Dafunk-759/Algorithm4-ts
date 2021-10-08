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
const isNumber = (arg: TreeNode | number): arg is number =>
  typeof arg === "number";
const getDepth = (root: TreeNode | null): number => {
  if (root === null) return 0;
  return (
    Math.max(getDepth(root.left), getDepth(root.right)) + 1
  );
};
const addCurrLevel = (
  level: (TreeNode | number)[],
  node: TreeNode | number
): void => {
  if (isNumber(node) && isNumber(level[level.length - 1])) {
    (level[level.length - 1] as number) += node;
  } else {
    level.push(node);
  }
};
const addQueue = (
  q: (TreeNode | number)[],
  node: TreeNode | number
): void => {
  if (isNumber(node)) {
    q.push(node * 2);
  } else {
    if (node.left === null) q.push(1);
    else q.push(node.left);
    if (node.right === null) q.push(1);
    else q.push(node.right);
  }
};
const toLevelOrder = (root: TreeNode) => {
  const queue: (TreeNode | number)[] = [root];
  const ret: (TreeNode | number)[][] = [];
  const depth = getDepth(root);
  for (let level = 1; level <= depth; level++) {
    const N = queue.length;
    const currLevel: (TreeNode | number)[] = [];
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode | number;
      addCurrLevel(currLevel, node);
      addQueue(queue, node);
    }
    ret.push(currLevel);
  }
  return ret;
};
const toWidth = (arr: (TreeNode | number)[]): number => {
  if (isNumber(arr[0])) arr.shift();
  if (isNumber(arr[arr.length - 1])) arr.pop();
  return arr.reduce(
    (acc, item) =>
      (acc as number) + (isNumber(item) ? item : 1),
    0
  ) as number;
};
function widthOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0;
  return toLevelOrder(root)
    .map(toWidth)
    .reduce(
      (max, width) => Math.max(max, width),
      Number.NEGATIVE_INFINITY
    );
}
