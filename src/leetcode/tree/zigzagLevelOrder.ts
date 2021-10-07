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

function zigzagLevelOrder(
  root: TreeNode | null
): number[][] {
  if (root === null) return [];
  const queue: TreeNode[] = [root];
  const ret: number[][] = [];
  while (queue.length > 0) {
    const N = queue.length;
    const currLevel: number[] = [];
    for (let i = 0; i < N; i++) {
      const currNode = queue.shift() as TreeNode;
      currLevel.push(currNode.val);
      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null)
        queue.push(currNode.right);
    }
    ret.push(currLevel);
  }
  return ret.map((level, index) => {
    if (index % 2 === 0) return level;
    return level.reverse();
  });
}
