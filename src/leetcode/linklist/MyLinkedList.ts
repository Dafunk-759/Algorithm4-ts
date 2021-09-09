//leet-code 707
interface ListNode {
  val: number;
  next: ListNode | null;
}
function makeNode(
  val: number = 0,
  next: ListNode | null = null
): ListNode {
  return {
    val,
    next,
  };
}

function makeLinkedList() {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;
  let length = 0;

  function get(index: number): number {
    let p = head;
    for (let i = 0; i < index; i++) {
      if (p === null) break;
      p = p.next;
    }
    return p === null ? -1 : p.val;
  }
  function addAtHead(val: number): void {
    const node = makeNode(val, head);
    head = node;
    if (head.next === null) tail = head;
    length += 1;
  }
  function addAtTail(val: number): void {
    const node = makeNode(val);
    if (tail !== null) {
      tail.next = node;
    }
    tail = node;
    length += 1;
    if (length === 1) {
      head = tail;
    }
  }
  function addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      addAtHead(val);
    } else if (index > length) {
      return;
    } else if (index === length) {
      addAtTail(val);
    } else {
      let p: ListNode | null = head;
      for (let i = 0; i < index - 1; i++) {
        if (p === null) throw new Error("bad index");
        p = p.next;
      }
      if (p === null) throw new Error("bad index");
      const node = makeNode(val, p.next);
      p.next = node;
      length += 1;
    }
  }
  function deleteAtIndex(index: number): void {
    const vHead = makeNode(0, head);
    let p: ListNode | null = vHead;
    for (let i = 0; i < index; i++) {
      if (p === null) return;
      p = p.next;
    }
    if (p === null || p.next === null) return;
    if (p.next === tail) {
      tail = p;
    }
    p.next = p.next.next;
    head = vHead.next;
    length -= 1;
  }
  function print() {
    let output = "list: ";
    for (let i = 0; i < length; i++) {
      output += `${get(i)} `;
    }
    console.log(output);
  }

  return {
    get,
    addAtHead,
    addAtTail,
    addAtIndex,
    deleteAtIndex,
    print,
  };
}

const list = makeLinkedList();

const methods = ["addAtTail", "get"];
const args = [[1], [0]];

methods.forEach((method, index) => {
  (list as any)[method](...args[index]);
  list.print();
});

// class MyLinkedList {
//   get(index: number): number {
//     return list.get(index);
//   }

//   addAtHead(val: number): void {
//     list.addAtHead(val);
//   }

//   addAtTail(val: number): void {
//     list.addAtTail(val);
//   }

//   addAtIndex(index: number, val: number): void {
//     list.addAtIndex(index, val);
//   }

//   deleteAtIndex(index: number): void {
//     list.deleteAtIndex(index);
//   }
// }

// const linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2); //链表变为1-> 2-> 3
// console.log(linkedList.get(1)); // 返回2
// linkedList.deleteAtIndex(1); //现在链表是1-> 3
// console.log(linkedList.get(1)); //返回3
