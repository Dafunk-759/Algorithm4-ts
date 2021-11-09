class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const removeDuplicateNodes = (
  head: ListNode | null
): ListNode | null => {
  const vHead = new ListNode(0, head)
  const set = new Set<number>()
  for (
    let pre = vHead, cur = head;
    cur !== null;
    cur = cur.next
  ) {
    if (set.has(cur.val)) {
      pre.next = cur.next
    } else {
      set.add(cur.val)
      pre = cur
    }
  }
  return vHead.next
}
