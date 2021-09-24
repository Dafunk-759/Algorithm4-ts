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
//层序遍历
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const iter = (
    queue: TreeNode[],
    ret: number[][]
  ): number[][] => {
    if (queue.length === 0) return ret;
    const currLevel: number[] = [];
    const N = queue.length;
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode;
      currLevel.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    ret.push(currLevel);
    return iter(queue, ret);
  };
  return iter([root], []);
}

function levelOrderBottom(
  root: TreeNode | null
): number[][] {
  if (root === null) return [];
  const iter = (
    queue: TreeNode[],
    ret: number[][]
  ): number[][] => {
    if (queue.length === 0) return ret;
    const currLevel: number[] = [];
    const N = queue.length;
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode;
      currLevel.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    ret.push(currLevel);
    return iter(queue, ret);
  };
  return iter([root], []).reverse();
}
function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return [];
  const iter = (
    queue: TreeNode[],
    ret: number[]
  ): number[] => {
    if (queue.length === 0) return ret;
    const N = queue.length;
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode;
      if (i === N - 1) ret.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return iter(queue, ret);
  };
  return iter([root], []);
}

function averageOfLevels(root: TreeNode | null): number[] {
  if (root === null) return [];
  const iter = (
    queue: TreeNode[],
    ret: number[]
  ): number[] => {
    if (queue.length === 0) return ret;
    let sum = 0;
    const N = queue.length;
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode;
      sum += node.val;
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    ret.push(sum / N);
    return iter(queue, ret);
  };
  return iter([root], []);
}

// class Node {
//   val: number;
//   children: Node[];
//   constructor(val?: number) {
//     this.val = val === undefined ? 0 : val;
//     this.children = [];
//   }
// }

// function levelOrderN(root: Node | null): number[][] {
//   if (root === null) return [];
//   const iter = (
//     queue: Node[],
//     ret: number[][]
//   ): number[][] => {
//     if (queue.length === 0) return ret;
//     const currLevel: number[] = [];
//     const N = queue.length;
//     for (let i = 0; i < N; i++) {
//       const node = queue.shift() as Node;
//       currLevel.push(node.val);
//       node.children.forEach((child) => {
//         if (child !== null) queue.push(child);
//       });
//     }
//     ret.push(currLevel);
//     return iter(queue, ret);
//   };
//   return iter([root], []);
// }

function largestValues(root: TreeNode | null): number[] {
  if (root === null) return [];
  const iter = (
    queue: TreeNode[],
    ret: number[]
  ): number[] => {
    if (queue.length === 0) return ret;
    let max = Number.NEGATIVE_INFINITY;
    const N = queue.length;
    for (let i = 0; i < N; i++) {
      const node = queue.shift() as TreeNode;
      max = Math.max(max, node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    ret.push(max);
    return iter(queue, ret);
  };
  return iter([root], []);
}

class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(
    val?: number,
    left?: Node,
    right?: Node,
    next?: Node
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: Node | null): Node | null {
  if (root === null) return root;
  const addChildren = (
    queue: Node[],
    parentNode: Node
  ): void => {
    if (parentNode.left !== null) {
      queue.push(parentNode.left);
    }
    if (parentNode.right !== null) {
      queue.push(parentNode.right);
    }
  };
  const iter = (queue: Node[]): void => {
    if (queue.length === 0) return;
    const N = queue.length;
    let prev = queue.shift() as Node;
    addChildren(queue, prev);
    for (let i = 1; i < N; i++) {
      const curr = queue.shift() as Node;
      prev.next = curr;
      prev = curr;
      addChildren(queue, curr);
    }
    return iter(queue);
  };
  iter([root]);
  return root;
}

function maxDepth(root: TreeNode | null): number {
  return root === null
    ? 0
    : 1 +
        Math.max(maxDepth(root.left), maxDepth(root.right));
}
function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  if (root.left === null) return 1 + minDepth(root.right);
  if (root.right === null) return 1 + minDepth(root.left);
  return (
    1 + Math.min(minDepth(root.left), minDepth(root.right))
  );
}

export {};
