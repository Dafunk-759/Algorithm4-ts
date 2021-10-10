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

class CBTInserter {
  private root: TreeNode | null;
  private last2level: TreeNode[];
  private getDepth(node: TreeNode | null): number {
    if (node === null) return 0;
    return (
      Math.max(
        this.getDepth(node.left),
        this.getDepth(node.right)
      ) + 1
    );
  }
  private findLast2Level(node: TreeNode): TreeNode[] {
    const maxDepth = this.getDepth(node);
    if (maxDepth <= 2) return [node];
    const ret: TreeNode[] = [];
    const dfs = (
      node: TreeNode | null,
      depth: number
    ): void => {
      if (node === null) return;
      if (depth === maxDepth - 1) ret.push(node);
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
    };
    dfs(node, 1);
    return ret;
  }
  constructor(root: TreeNode | null) {
    if (root === null) throw new Error("bad root");
    this.root = root;
    this.last2level = this.findLast2Level(root);
  }
  private nextLevel(): TreeNode[] {
    return this.last2level.flatMap((p) => [
      p.left as TreeNode,
      p.right as TreeNode,
    ]);
  }
  insert(val: number): number {
    for (const node of this.last2level) {
      if (node.left !== null && node.right !== null)
        continue;
      if (node.left === null) {
        node.left = new TreeNode(val);
      } else {
        node.right = new TreeNode(val);
      }
      return node.val;
    }
    this.last2level = this.nextLevel();
    this.last2level[0].left = new TreeNode(val);
    return this.last2level[0].val;
  }

  get_root(): TreeNode | null {
    return this.root;
  }
}
