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

class BSTIterator {
  private inOrderArr: number[];
  private toInOrderArr(node: TreeNode | null): number[] {
    if (node === null) return [];
    return [
      ...this.toInOrderArr(node.left),
      node.val,
      ...this.toInOrderArr(node.right),
    ];
  }
  private index = 0;
  constructor(root: TreeNode | null) {
    this.inOrderArr = this.toInOrderArr(root);
  }

  next(): number {
    const ret = this.inOrderArr[this.index];
    this.index += 1;
    return ret;
  }

  hasNext(): boolean {
    return this.index < this.inOrderArr.length;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
