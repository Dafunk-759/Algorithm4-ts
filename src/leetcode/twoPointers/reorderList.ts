class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
const mkStack = (head: ListNode | null): ListNode[] => {
  const ret: ListNode[] = [];
  for (let p = head; p !== null; p = p.next) {
    ret.push(p);
  }
  return ret;
};
const isEx = (
  node: ListNode | null | undefined
): node is ListNode => node !== null && node !== undefined;
function reorderListStack(head: ListNode | null): void {
  const stack = mkStack(head);
  for (
    let p: ListNode | null | undefined = head;
    isEx(p);
    p = p?.next?.next
  ) {
    const tail = stack.pop();
    if (!isEx(tail)) return;
    if (p === tail || p.next === tail) return;
    tail.next = p.next;
    p.next = tail;
    if (stack.length > 0)
      stack[stack.length - 1].next = null;
  }
}
const findMid = (head: ListNode) => {
  for (
    let fast = head.next;
    fast !== null && fast.next !== null;
    fast = fast.next.next, head = head.next as ListNode
  );
  return head;
};
const reverse = (head: ListNode) => {
  let newHead: ListNode | null = null;
  let first: ListNode | null = head;
  while (first !== null) {
    let second: ListNode | null = first.next;
    first.next = newHead;
    newHead = first;
    first = second;
  }
  return newHead as ListNode;
};
const merge = (l1: ListNode, l2: ListNode) => {
  const vHead = new ListNode(0, l1);
  type T = ListNode | null;
  let p1: T = l1;
  let p2: T = l2;
  let p = vHead;
  for (; isEx(p1) && isEx(p2); p = p.next.next) {
    p.next = p1;
    p1 = p1.next;
    p.next.next = p2;
    p2 = p2.next;
  }
  if (isEx(p1)) p.next = p1;
  else if (isEx(p2)) p.next = p2;
  else p.next = null;
  return vHead.next;
};
function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) return;
  const mid = findMid(head);
  const l2 = reverse(mid.next as ListNode);
  mid.next = null;
  merge(head, l2);
}
