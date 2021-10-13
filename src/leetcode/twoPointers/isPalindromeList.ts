class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const reverse = (head: ListNode) => {
  type T = ListNode | null;
  let newHead: T = null;
  for (let first: T = head; first !== null; ) {
    let second: T = first.next;
    first.next = newHead;
    newHead = first;
    first = second;
  }
  return newHead as ListNode;
};
const partition = (head: ListNode) => {
  let slow = head;
  for (
    let fast = head.next;
    fast !== null && fast.next !== null;
    fast = fast.next.next, slow = slow.next as ListNode
  );
  const l2 = slow.next;
  slow.next = null;
  return [head, l2, slow] as ListNode[];
};
const isSame = (
  l: ListNode | null,
  r: ListNode | null
): boolean => {
  for (
    let p = l, q = r;
    p !== null && q !== null;
    p = p.next, q = q.next
  ) {
    if (p.val !== q.val) return false;
  }
  return true;
};
function isPalindrome(head: ListNode): boolean {
  if (head.next === null) return true;
  let [l, r, mid] = partition(head);
  r = reverse(r);
  const ret = isSame(l, r);
  r = reverse(r);
  mid.next = r;
  return ret;
}
