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
interface R {
  coins: number;
  moves: number;
}
const postorder = (node: TreeNode | null): R => {
  if (node === null)
    return {
      coins: 0,
      moves: 0,
    };
  const left = postorder(node.left);
  const right = postorder(node.right);
  let currCoins = node.val;
  let currMoves = 0;
  if (left.coins !== 0) {
    currCoins += left.coins;
    currMoves += Math.abs(left.coins);
  }
  if (right.coins !== 0) {
    currCoins += right.coins;
    currMoves += Math.abs(right.coins);
  }
  return {
    coins: currCoins - 1,
    moves: currMoves + left.moves + right.moves,
  };
};
function distributeCoins(root: TreeNode | null): number {
  const ret = postorder(root);
  if (ret.coins !== 0) throw new Error("never");
  return ret.moves;
}
