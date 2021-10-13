class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const exc = (node1: ListNode, node2: ListNode): void => {
  [node1.val, node2.val] = [node2.val, node1.val];
};
function sortListSelect(
  head: ListNode | null
): ListNode | null {
  type T = ListNode | null;
  for (let p = head; p !== null; p = p.next) {
    let min = p.val;
    for (let q: T = p; q !== null; q = q.next) {
      if (q.val < min) {
        min = q.val;
        exc(p, q);
      }
    }
  }
  return head;
}
const mid = (head: ListNode) => {
  let slow = head;
  for (
    let fast = head.next;
    fast !== null && fast.next !== null;
    fast = fast.next.next, slow = slow.next as ListNode
  );
  return slow;
};
const merge = (l1: ListNode, l2: ListNode): ListNode => {
  const vHead = new ListNode(0, l1);
  type T = ListNode | null;
  let p: ListNode;
  let p1: T;
  let p2: T;
  for (
    p = vHead, p1 = l1, p2 = l2;
    p1 !== null && p2 !== null;
    p = p.next as ListNode
  ) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
  }
  if (p1 !== null) p.next = p1;
  else if (p2 !== null) p.next = p2;
  else p.next = null;
  return vHead.next as ListNode;
};
const partition = (head: ListNode) => {
  const midNode = mid(head);
  const l2 = midNode.next as ListNode;
  midNode.next = null;
  return [head, l2];
};
const mergeSort = (head: ListNode): ListNode => {
  if (head.next === null) return head;
  let [l1, l2] = partition(head);
  l1 = mergeSort(l1);
  l2 = mergeSort(l2);
  return merge(l1, l2);
};
function sortListMerge(
  head: ListNode | null
): ListNode | null {
  if (head === null) return null;
  return mergeSort(head);
}
