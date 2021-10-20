class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const middleNode = (head: ListNode): ListNode | null => {
  let slow = head;
  for (
    let fast = head;
    fast.next !== null;
    fast = fast.next.next || fast.next,
      slow = slow.next as ListNode
  );
  return slow;
};
