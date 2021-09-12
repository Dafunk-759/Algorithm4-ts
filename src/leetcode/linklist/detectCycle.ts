// leet-code 142. 环形链表 II

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function findCycle(
  p: ListNode | null,
  set: Set<ListNode | null>
): ListNode | null {
  if (p === null) return p;

  set.add(p);
  if (set.has(p.next)) {
    return p.next;
  }

  return findCycle(p.next, set);
}

function detectCycle(
  head: ListNode | null
): ListNode | null {
  return findCycle(head, new Set<ListNode | null>());
}
