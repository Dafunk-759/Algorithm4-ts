class ListNode<T> {
  item: T;
  next: ListNode<T> | null;

  constructor(item: T, next: ListNode<T> | null = null) {
    this.item = item;
    this.next = next;
  }
}

//就地翻转链表（迭代）
//记录链表中三个连续节点：reverse first second
//每轮迭代中从原链表中提取节点first并将它插入逆链表的开头
//我们需要一直保持first指向原链表中所有剩余结点的首结点，
//second指向原链表中所有剩余结点的第二个结点,
//reverse指向结果链表中的首结点。
function reverseIter<T>(
  x: ListNode<T> | null
): ListNode<T> | null {
  let reverse: ListNode<T> | null = null;
  let first = x;
  while (first !== null) {
    const second = first.next;
    first.next = reverse;
    reverse = first;
    first = second;
  }
  return reverse;
}

//就地翻转链表（递归）
//假设链表含有N个结点，
//我们先递归颠倒最后N-1个结点，
//然后小心地将原链表中的首结点插入到结果链表的末端。
function reverseRecurse<T>(
  first: ListNode<T> | null
): ListNode<T> | null {
  if (first === null) return null;
  if (first.next === null) return first;
  const second = first.next;
  const rest = reverseRecurse(second);
  second.next = first;
  first.next = null;
  return rest;
}

function genList(n: number): ListNode<string> {
  const a: ListNode<string>[] = [];
  for (let i = 1; i <= n; i++) {
    a.push(new ListNode(`node${i}`));
  }
  a.forEach((value, index, arr) => {
    value.next = arr[index + 1] || null;
  });
  return a[0];
}

const list = genList(10);
const reversed = reverseRecurse(list);

for (
  let p: ListNode<string> | null = reversed;
  p !== null;
  p = p.next
) {
  console.log(p.item);
}
