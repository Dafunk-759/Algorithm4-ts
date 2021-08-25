import * as util from "../util/indexNode.js";

interface IStack<T> extends Iterable<T> {
  push(item: T): void;
  pop(): T;
  isEmpty(): boolean;
  size(): number;
}

//js中数组为关联数组，数组长度可变，这里模仿定长数组实现栈
class ResizeArrStack<T> implements IStack<T> {
  private a: T[] = new Array(1);
  private N: number = 0;
  private resize(max: number) {
    const temp: T[] = new Array(max);
    for (let i = 0; i < this.N; i++) {
      temp[i] = this.a[i];
    }
    this.a = temp;
  }

  isEmpty() {
    return this.N === 0;
  }
  size() {
    return this.N;
  }
  push(item: T) {
    if (this.N === this.a.length) {
      this.resize(2 * this.a.length);
    }
    this.a[this.N++] = item;
  }
  pop() {
    if (this.isEmpty()) throw new Error("stack is empty");
    const item: T = this.a[--this.N];
    if (this.N > 0 && this.N === this.a.length / 4)
      this.resize(this.a.length / 2);
    return item;
  }
  [Symbol.iterator]() {
    const stack = this;
    let i = this.N;
    const obj: Iterator<T> = {
      next() {
        let ret: IteratorResult<T>;
        if (i > 0) {
          ret = {
            done: false,
            value: stack.a[--i],
          };
        } else {
          ret = {
            done: true,
            value: stack.a[i],
          };
        }
        return ret;
      },
    };
    return obj;
  }
}

class ListNode<T> {
  item: T;
  next: ListNode<T> | null;

  constructor(item: T, next: ListNode<T> | null = null) {
    this.item = item;
    this.next = next;
  }
}

export class Stack<T> implements IStack<T> {
  private first: ListNode<T> | null = null;
  private N: number = 0;
  isEmpty(): boolean {
    return this.first === null;
  }
  size() {
    return this.N;
  }
  push(item: T) {
    const oldfirst = this.first;
    this.first = new ListNode(item);
    this.first.next = oldfirst;
    this.N++;
  }
  pop(): T {
    if (this.first === null) throw new Error("no element");
    const item = this.first.item;
    this.first = this.first.next;
    this.N--;
    return item;
  }
  *[Symbol.iterator]() {
    for (let p = this.first; p !== null; p = p.next) {
      yield p.item;
    }
  }
}

//test
(() => {
  const stack = new Stack<string>();

  const strArr = util.read("tobe.txt") as string[];
  console.log(strArr);

  for (let s of strArr) {
    if (s !== "-") stack.push(s);
    else console.log(stack.pop() + " ");
  }
  console.log(`${stack.size()} left on stack`);
  for (const item of stack) {
    console.log(item);
  }
})();
