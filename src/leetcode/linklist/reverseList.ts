class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function makeNode(
  val: number,
  next: ListNode | null = null
) {
  return new ListNode(val, next);
}

//返回新链表
function reverseList(
  head: ListNode | null
): ListNode | null {
  let reverse: ListNode | null = null;
  for (let p = head; p !== null; p = (p as ListNode).next) {
    const node = makeNode(p.val, reverse);
    reverse = node;
  }
  return reverse;
}

//in place (迭代)
function reverseListInPlaceIter(
  head: ListNode | null
): ListNode | null {
  let reverse: ListNode | null = null,
    second: ListNode | null = null,
    first: ListNode | null = head;
  while (first !== null) {
    second = first.next;
    first.next = reverse;
    reverse = first;
    first = second;
  }

  return reverse;
}
//in place (递归)
function reverseListInPlaceRecurse(
  head: ListNode | null
): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  const reverse = reverseListInPlaceRecurse(head.next);
  const next = head.next.next;
  head.next.next = head;
  head.next = next;
  return reverse;
}

export {};
