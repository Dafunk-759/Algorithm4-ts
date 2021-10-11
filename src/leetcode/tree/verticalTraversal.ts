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
interface V {
  row: number;
  col: number;
  node: number;
}
const toVertical = (root: TreeNode | null): V[] => {
  const ret: V[] = [];
  const dfs = (
    node: TreeNode | null,
    row: number,
    col: number
  ): void => {
    if (node === null) return;
    ret.push({
      row,
      col,
      node: node.val,
    });
    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1);
  };
  dfs(root, 0, 0);
  return ret;
};
const byColRowNode = (a1: V, a2: V) =>
  a1.col !== a2.col
    ? a1.col - a2.col
    : a1.row !== a2.row
    ? a1.row - a2.row
    : a1.node - a2.node;
const groupByCol = (arr: V[]): number[][] => {
  const ret: number[][] = [[arr[0].node]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].col === arr[i - 1].col) {
      ret[ret.length - 1].push(arr[i].node);
    } else {
      ret.push([arr[i].node]);
    }
  }
  return ret;
};
function verticalTraversal(
  root: TreeNode | null
): number[][] {
  return groupByCol(toVertical(root).sort(byColRowNode));
}
