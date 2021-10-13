class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const nodesSet = (list: ListNode | null) => {
  const ret = new Set<ListNode>();
  for (let p = list; p !== null; p = p.next) {
    ret.add(p);
  }
  return ret;
};
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const list1Set = nodesSet(headA);
  for (let p = headB; p !== null; p = p.next) {
    if (list1Set.has(p)) return p;
  }
  return null;
}
