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

const maxItemIndex = (arr: number[]) => {
  let index = 0;
  let max = Number.NEGATIVE_INFINITY;
  arr.forEach((value, i) => {
    if (value > max) {
      max = value;
      index = i;
    }
  });
  return index;
};

function constructMaximumBinaryTree(
  nums: number[]
): TreeNode | null {
  if (nums.length === 0) return null;
  const index = maxItemIndex(nums);
  return new TreeNode(
    nums[index],
    constructMaximumBinaryTree(nums.slice(0, index)),
    constructMaximumBinaryTree(nums.slice(index + 1))
  );
}
