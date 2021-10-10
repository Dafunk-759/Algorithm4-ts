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

function flipMatchVoyage(
  root: TreeNode,
  voyage: number[]
): number[] {
  if (root.val !== voyage[0]) return [-1];
  if (root.left === null && root.right === null) {
    if (voyage.length - 1 <= 0) return [];
    return [-1];
  } else if (root.left !== null && root.right === null) {
    return flipMatchVoyage(root.left, voyage.slice(1));
  } else if (root.left === null && root.right !== null) {
    return flipMatchVoyage(root.right, voyage.slice(1));
  } else if (root.left !== null && root.right !== null) {
    const leftIndex = voyage.indexOf(root.left.val);
    const rightIndex = voyage.indexOf(root.right.val);
    if (leftIndex === -1 || rightIndex === -1) return [-1];
    if (leftIndex < rightIndex) {
      const left = flipMatchVoyage(
        root.left,
        voyage.slice(leftIndex, rightIndex)
      );
      const right = flipMatchVoyage(
        root.right,
        voyage.slice(rightIndex)
      );
      if (left[0] === -1 || right[0] === -1) return [-1];
      return left.concat(right);
    } else {
      const left = flipMatchVoyage(
        root.left,
        voyage.slice(leftIndex)
      );
      const right = flipMatchVoyage(
        root.right,
        voyage.slice(rightIndex, leftIndex)
      );
      if (left[0] === -1 || right[0] === -1) return [-1];
      return [root.val].concat(left).concat(right);
    }
  }
  throw new Error("never");
}
