//leet-code 203

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function node(
  ...args: ConstructorParameters<typeof ListNode>
) {
  return new ListNode(...args);
}

function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  const vHead = node(0, head);
  let p: ListNode | null = vHead;

  while (p !== null) {
    if (p.next !== null && p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return vHead.next;
}
