// 面试题 02.07. 链表相交 leet-code

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function makeStack(head) {
  const stack = [];
  for (let p = head; p !== null; p = p.next) {
    stack.push(p);
  }
  return stack;
}

function getSameOrNull(stackA, stackB) {
  const nodeA = stackA.pop(),
    nodeB = stackB.pop();
  if (nodeA === undefined || nodeB === undefined) {
    return null;
  }
  if (nodeA !== nodeB) {
    return null;
  }
  const nextA = stackA[stackA.length - 1],
    nextB = stackB[stackB.length - 1];
  if (
    nextA !== nextB ||
    (nextA === undefined && nextB === undefined)
  ) {
    return nodeA;
  }

  return getSameOrNull(stackA, stackB);
}

var getIntersectionNode = function (headA, headB) {
  return getSameOrNull(makeStack(headA), makeStack(headB));
};
