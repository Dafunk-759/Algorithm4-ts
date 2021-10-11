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

const shouldDel = (nodeVal: number, toDel: number[]) =>
  toDel.includes(nodeVal);
function delNodes(
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> {
  const ret: TreeNode[] = [];
  const dfs = (node: TreeNode | null): TreeNode | null => {
    if (node === null) return null;
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    if (shouldDel(node.val, to_delete)) {
      if (node.left !== null) ret.push(node.left);
      if (node.right !== null) ret.push(node.right);
      return null;
    }
    return node;
  };
  const newRoot = dfs(root);
  if (newRoot !== null) ret.push(newRoot);
  return ret;
}
