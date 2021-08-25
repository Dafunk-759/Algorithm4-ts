import * as util from "../util/indexNode.js";

interface IBag<T> extends Iterable<T> {
  add(item: T): void;
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

class Bag<T> implements IBag<T> {
  private first: ListNode<T> | null = null;
  private N: number = 0;

  isEmpty(): boolean {
    return this.first === null || this.N === 0;
  }
  size(): number {
    return this.N;
  }
  add(item: T) {
    const oldFirst = this.first;
    this.first = new ListNode<T>(item, oldFirst);
    this.N++;
  }
  *[Symbol.iterator]() {
    for (let p = this.first; p !== null; p = p.next) {
      yield p.item;
    }
  }
}

(() => {
  const bag = new Bag<string>();
  const strArr = util.read("tobe.txt") as string[];
  console.log(strArr);

  for (let s of strArr) {
    if (s !== "-") bag.add(s);
  }
  console.log(`${bag.size()} items total`);

  for (const item of bag) {
    console.log(item);
  }
})();
