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

function generateTrees(n: number): Array<TreeNode | null> {
  const gT = (
    start: number,
    end: number
  ): Array<TreeNode | null> => {
    if (start > end) return [null];
    if (start === end) return [new TreeNode(start)];
    const ret: Array<TreeNode | null> = [];
    for (let i = start; i <= end; i++) {
      const left = gT(start, i - 1);
      const right = gT(i + 1, end);
      const currNodeArr: Array<TreeNode | null> = [];
      for (const leftChild of left) {
        for (const rightChild of right) {
          currNodeArr.push(
            new TreeNode(i, leftChild, rightChild)
          );
        }
      }
      ret.push(...currNodeArr);
    }
    return ret;
  };
  return gT(1, n);
}
function recoverTree(root: TreeNode | null): void {
  const mapToArr = (
    root: TreeNode | null
  ): (number | null)[] => {
    if (root === null) return [null];
    return [
      ...mapToArr(root.left),
      root.val,
      ...mapToArr(root.right),
    ];
  };
  const tree = mapToArr(root);
  const sortedTree = tree
    .filter((n) => n !== null)
    .sort((a, b) => a - b);
  let currIndex = 0;
  const inOrder = (root: TreeNode | null): void => {
    if (root === null) return;
    inOrder(root.left);
    root.val = sortedTree[currIndex];
    currIndex += 1;
    inOrder(root.right);
  };
  inOrder(root);
}
function exc(node1: TreeNode, node2: TreeNode): void {
  [node1.val, node2.val] = [node2.val, node1.val];
}
function recoverTreeOn(root: TreeNode | null): void {
  let pre: TreeNode | null = null;
  const changeNodes: TreeNode[] = [];
  const inOrder = (root: TreeNode | null): void => {
    if (root === null) return;
    inOrder(root.left);
    if (pre !== null) {
      if (pre.val > root.val) {
        changeNodes.push(pre, root);
      }
    }
    pre = root;
    inOrder(root.right);
  };
  inOrder(root);
  exc(changeNodes[0], changeNodes[changeNodes.length - 1]);
}
