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

function getMinimumDifference(
  root: TreeNode | null
): number {
  const inOrder = (node: TreeNode | null): number[] => {
    if (node === null) return [];
    return [
      ...inOrder(node.left),
      node.val,
      ...inOrder(node.right),
    ];
  };
  const getMinDiff = (arr: number[]) => {
    if (arr.length < 2) throw new Error("bad arr");
    let min = Number.POSITIVE_INFINITY;
    for (let i = 1; i < arr.length; i++) {
      min = Math.min(min, Math.abs(arr[i] - arr[i - 1]));
    }
    return min;
  };
  return getMinDiff(inOrder(root));
}

function findMode(root: TreeNode | null): number[] {
  const inOrder = (node: TreeNode | null): number[] => {
    if (node === null) return [];
    return [
      ...inOrder(node.left),
      node.val,
      ...inOrder(node.right),
    ];
  };
  const getModeSet = (arr: number[]): number[] => {
    const ret: number[] = [];
    let count = 0;
    let maxFreq = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        count += 1;
      } else {
        count = 1;
      }

      if (count === maxFreq) ret.push(arr[i]);
      if (count > maxFreq) {
        ret.length = 0;
        maxFreq = count;
        ret.push(arr[i]);
      }
    }
    return ret;
  };

  const getModeSetR = (arr: number[]): number[] => {
    const loop = (
      i: number,
      count: number,
      maxFreq: number,
      ret: number[]
    ): number[] => {
      if (i >= arr.length) return ret;
      const nextCount =
        arr[i] === arr[i - 1] ? count + 1 : 1;
      if (nextCount === maxFreq) {
        ret.push(arr[i]);
        return loop(i + 1, nextCount, maxFreq, ret);
      }
      if (nextCount > maxFreq)
        return loop(i + 1, nextCount, nextCount, [arr[i]]);
      return loop(i + 1, nextCount, maxFreq, ret);
    };
    return loop(0, 0, Number.NEGATIVE_INFINITY, []);
  };
  return getModeSet(inOrder(root));
}
