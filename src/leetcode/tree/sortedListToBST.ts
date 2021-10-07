class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

function sortedListToBST(
  head: ListNode | null
): TreeNode | null {
  const toArr = (head: ListNode | null): number[] => {
    const ret: number[] = [];
    for (let p = head; p !== null; p = p.next) {
      ret.push(p.val);
    }
    return ret;
  };
  const sortedArrToBSF = (
    arr: number[]
  ): TreeNode | null => {
    if (arr.length <= 0) return null;
    const mid = arr.length >> 1;
    return new TreeNode(
      arr[mid],
      sortedArrToBSF(arr.slice(0, mid)),
      sortedArrToBSF(arr.slice(mid + 1))
    );
  };
  return sortedArrToBSF(toArr(head));
}
