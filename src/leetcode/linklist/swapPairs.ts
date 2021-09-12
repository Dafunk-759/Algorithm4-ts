class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//普通递归
function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  const next = head.next.next;
  head.next.next = head;
  head.next = swapPairs(next);
  return next;
}

//尾调用优化版递归
function swapPairsTailCall(
  head: ListNode | null
): ListNode | null {
  const vHead = new ListNode(0, head);
  tailCall(vHead, head);
  return vHead.next;
}

function tailCall(
  prev: ListNode,
  head: ListNode | null
): ListNode | null {
  if (head === null || head.next === null) {
    prev.next = head;
    return head;
  }
  const next = head.next.next;
  const newHead = head.next;
  newHead.next = head;
  prev.next = newHead;
  return tailCall(head, next);
}

export {};
