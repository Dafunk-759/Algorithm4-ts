class MyNode {
  val: number;
  children: MyNode[];
  constructor(val?: number, children?: MyNode[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: MyNode | null): number {
  if (root === null) return 0;
  if (root.children.length === 0) return 1;
  return (
    1 +
    Math.max(
      ...root.children.map((child) => maxDepth(child))
    )
  );
}
