class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const newOrder = (
  head: ListNode | null,
  x: number
): number[] => {
  const lt: number[] = [];
  const gt: number[] = [];
  for (let p = head; p !== null; p = p.next) {
    if (p.val < x) lt.push(p.val);
    else gt.push(p.val);
  }
  return lt.concat(gt);
};
const reset = (
  head: ListNode | null,
  nums: number[]
): void => {
  for (
    let p = head, i = 0;
    p !== null && i < nums.length;
    p = p.next, i++
  ) {
    p.val = nums[i];
  }
};
function partitionSpace(
  head: ListNode | null,
  x: number
): ListNode | null {
  reset(head, newOrder(head, x));
  return head;
}
function partition(
  head: ListNode | null,
  x: number
): ListNode | null {
  const ltHead = new ListNode(0);
  let lp = ltHead;
  const gtHead = new ListNode(0);
  let gp = gtHead;
  for (let p = head; p !== null; p = p.next) {
    if (p.val < x) {
      lp.next = p;
      lp = lp.next;
    } else {
      gp.next = p;
      gp = gp.next;
    }
  }
  lp.next = gtHead.next;
  gp.next = null;
  return ltHead.next;
}
