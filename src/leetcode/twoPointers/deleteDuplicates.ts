class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
//删到就剩一个
function deleteDuplicatesWrong(
  head: ListNode | null
): ListNode | null {
  if (head === null) return null;
  for (
    let pre = head, curr = head.next;
    curr !== null;
    curr = (curr as ListNode).next
  ) {
    if (curr.val !== pre.val) {
      pre = curr;
    } else {
      pre.next = curr.next;
    }
  }
  return head;
}
//删完
const mkDelNodesSet = (head: ListNode | null) => {
  const set = new Set<ListNode>();
  if (head === null) return set;
  for (
    let pre = head, curr = head.next;
    curr !== null;
    pre = curr, curr = (curr as ListNode).next
  ) {
    if (pre.val === curr.val) {
      set.add(pre);
      set.add(curr);
    }
  }
  return set;
};
function deleteDuplicatesSet(
  head: ListNode | null
): ListNode | null {
  const delNodes = mkDelNodesSet(head);
  const vHead = new ListNode(0, head);
  for (let pre = vHead; pre.next !== null; ) {
    if (delNodes.has(pre.next)) {
      pre.next = pre.next.next;
    } else {
      pre = pre.next;
    }
  }
  return vHead.next;
}
//一次遍历
const shouldDel = (node: ListNode): boolean => {
  if (node.next === null) return false;
  return node.val === node.next.val;
};
const nextNode = (node: ListNode): ListNode | null => {
  for (
    let p: ListNode | null = node;
    p !== null;
    p = p.next
  ) {
    if (p.val !== node.val) return p;
  }
  return null;
};
function deleteDuplicates(
  head: ListNode | null
): ListNode | null {
  const vHead = new ListNode(0, head);
  for (let pre = vHead; pre.next !== null; ) {
    if (shouldDel(pre.next)) {
      pre.next = nextNode(pre.next);
    } else {
      pre = pre.next;
    }
  }
  return vHead.next;
}
