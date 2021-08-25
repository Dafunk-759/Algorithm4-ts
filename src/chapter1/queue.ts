import * as util from "../util/indexNode.js";

interface IQueue<T> extends Iterable<T> {
  enqueue(item: T): void;
  dequeue(): T;
  isEmpty(): boolean;
  size(): number;
}

class ListNode<T> {
  item: T;
  next: ListNode<T> | null;

  constructor(item: T, next: ListNode<T> | null = null) {
    this.item = item;
    this.next = next;
  }
}

export class Queue<T> implements IQueue<T> {
  private first: ListNode<T> | null = null;
  private last: ListNode<T> | null = null;
  private N: number = 0;

  isEmpty(): boolean {
    return this.first === null || this.N === 0;
  }
  size(): number {
    return this.N;
  }
  enqueue(item: T) {
    const oldLast = this.last;
    this.last = new ListNode<T>(item);
    if (this.isEmpty()) this.first = this.last;
    else (<ListNode<T>>oldLast).next = this.last;
    this.N++;
  }
  dequeue(): T {
    if (this.first === null) throw new Error("no element");
    const item = this.first.item;
    this.first = this.first.next;
    if (this.isEmpty()) this.last = null;
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
// (() => {
//   const queue = new Queue<string>();

//   const strArr = util.read("tobe.txt") as string[];
//   console.log(strArr);

//   for (let s of strArr) {
//     if (s !== "-") queue.enqueue(s);
//     else console.log(queue.dequeue() + " ");
//   }
//   console.log(`${queue.size()} left on queue`);
//   for (const item of queue) {
//     console.log(item);
//   }
// })();
