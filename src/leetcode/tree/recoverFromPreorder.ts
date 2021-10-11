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
interface N {
  level: number;
  val: number;
}
const mkN = (level: number, val: number): N => ({
  level,
  val,
});
const parse = (s: string): N[] => {
  const a = s.split(/(\d+)/g);
  const ret: N[] = [];
  for (let i = 0; i + 1 < a.length; i += 2) {
    ret.push(mkN(a[i].length, Number(a[i + 1])));
  }
  return ret;
};
interface P {
  root: number;
  left: N[];
  right: N[];
}
const mkP = (root: number, left: N[], right: N[]): P => ({
  root,
  left,
  right,
});
const findRightIndex = (
  level: number,
  nodes: N[]
): number => {
  for (let i = 2; i < nodes.length; i++) {
    if (nodes[i].level === level) return i;
  }
  return -1;
};
const partial = (nodes: N[]): P => {
  const root = nodes[0].val;
  if (nodes.length === 1) return mkP(root, [], []);
  const leftIndex = 1;
  const rightIndex = findRightIndex(nodes[1].level, nodes);
  if (rightIndex !== -1)
    return mkP(
      root,
      nodes.slice(leftIndex, rightIndex),
      nodes.slice(rightIndex)
    );
  return mkP(root, nodes.slice(leftIndex), []);
};
const consTree = (nodes: N[]): TreeNode | null => {
  if (nodes.length <= 0) return null;
  const { root, left, right } = partial(nodes);
  return new TreeNode(
    root,
    consTree(left),
    consTree(right)
  );
};
function recoverFromPreorder(
  traversal: string
): TreeNode | null {
  return consTree(parse(traversal));
}
