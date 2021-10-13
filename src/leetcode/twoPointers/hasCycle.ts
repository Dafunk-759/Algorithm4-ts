class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const isEx = (node: ListNode | null | undefined) =>
  node !== null && node !== undefined;
function hasCycle(head: ListNode | null): boolean {
  for (
    let fast = head?.next?.next, slow = head?.next;
    isEx(fast) && isEx(slow);
    fast = fast?.next?.next, slow = slow?.next
  ) {
    if (slow === fast) return true;
  }
  return false;
}
