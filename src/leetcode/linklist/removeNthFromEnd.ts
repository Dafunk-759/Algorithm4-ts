class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//iter
function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const vHead = new ListNode(0, head);
  let fast: ListNode | null = head;
  let slow: ListNode = vHead;
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      throw new Error("bad n");
    }
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next as ListNode;
  }
  slow.next = (slow.next as ListNode).next;
  return vHead.next;
}
