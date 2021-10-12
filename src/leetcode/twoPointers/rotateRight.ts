class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const rotate = (
  head: ListNode,
  tail: ListNode
): ListNode[] => {
  tail.next = head;
  while (head.next !== tail) head = head.next as ListNode;
  head.next = null;
  return [tail, head];
};
const findTail = (head: ListNode): ListNode => {
  while (head.next !== null) head = head.next;
  return head;
};
const listLen = (head: ListNode): number => {
  let ret = 0;
  for (let p = head; p !== null; p = p.next as ListNode)
    ret += 1;
  return ret;
};
function rotateRight(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (head === null || head.next === null) return head;
  k = k % listLen(head);
  let tail = findTail(head);
  for (let i = 0; i < k; i++) {
    const [nextHead, nextTail] = rotate(head, tail);
    head = nextHead;
    tail = nextTail;
  }
  return head;
}
