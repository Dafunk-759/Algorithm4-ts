class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const len = (head: ListNode) => {
  let l = 0;
  for (
    let p: ListNode | null = head;
    p !== null;
    p = p.next
  ) {
    l += 1;
  }
  return l;
};
const findNth = (head: ListNode, n: number) => {
  let p: ListNode = new ListNode(0, head);
  for (let i = 1; i <= n; i++) {
    p = p.next as ListNode;
  }
  return p;
};
const exc = (node1: ListNode, node2: ListNode): void => {
  [node1.val, node2.val] = [node2.val, node1.val];
};
function swapNodes(
  head: ListNode,
  k: number
): ListNode | null {
  const l = len(head);
  const node1 = findNth(head, k);
  const node2 = findNth(head, l - k + 1);
  exc(node1, node2);
  return head;
}
const findLastKth = (kth: ListNode, head: ListNode) => {
  let node2 = head;
  for (let p = kth; p.next !== null; p = p.next) {
    node2 = node2.next as ListNode;
  }
  return node2;
};
function swapNodesTwoPtr(
  head: ListNode,
  k: number
): ListNode | null {
  const node1 = findNth(head, k);
  const node2 = findLastKth(node1, head);
  exc(node1, node2);
  return head;
}
