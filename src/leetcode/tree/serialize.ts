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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (root === null) return "null";
  const ret: string[][] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length > 0) {
    const N = queue.length;
    const currLevel: string[] = [];
    for (let i = 0; i < N; i++) {
      const curr = queue.shift() as TreeNode | null;
      if (curr === null) currLevel.push("null");
      else {
        currLevel.push(String(curr.val));
        queue.push(curr.left);
        queue.push(curr.right);
      }
    }
    ret.push(currLevel);
  }
  return ret.map((level) => `${level.join(".")}`).join(",");
}

/*
 * Decodes your encoded data to tree.
 */
const toNode = (raw: string): TreeNode | null => {
  if (raw === "null") return null;
  return new TreeNode(Number(raw));
};
function deserialize(data: string): TreeNode | null {
  const tree = data
    .split(",")
    .map((level) => level.split("."));
  const root = toNode(tree[0][0]);
  if (root === null) return root;

  const queue: TreeNode[] = [root];
  for (let i = 1; i < tree.length; i++) {
    const currLevel = tree[i];
    for (let j = 0; j < currLevel.length; j += 2) {
      const left = toNode(currLevel[j]);
      const right = toNode(currLevel[j + 1]);
      const parent = queue.shift() as TreeNode;
      parent.left = left;
      parent.right = right;
      if (left !== null) queue.push(left);
      if (right !== null) queue.push(right);
    }
  }
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
