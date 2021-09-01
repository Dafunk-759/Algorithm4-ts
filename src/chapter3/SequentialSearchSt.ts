import { ST, frequencyCounter } from "./ST.js";

class STNode<Key, Value> {
  constructor(
    public key: Key,
    public val: Value | null,
    public next: STNode<Key, Value> | null
  ) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class SequentialSearchSt<Key, Value> extends ST<
  Key,
  Value
> {
  private first: STNode<Key, Value> | null = null;
  get(key: Key): Value | null {
    for (let x = this.first; x !== null; x = x.next) {
      if (key === x.key) {
        return x.val;
      }
    }
    return null;
  }
  put(key: Key, val: Value | null): void {
    for (let x = this.first; x !== null; x = x.next) {
      if (key === x.key) {
        x.val = val;
        return;
      }
    }
    this.first = new STNode(key, val, this.first);
  }
  size(): number {
    let n = 0;
    for (let x = this.first; x !== null; x = x.next) {
      if (x.val !== null) n++;
    }
    return n;
  }
  *keys() {
    for (let x = this.first; x !== null; x = x.next) {
      yield x.key;
    }
  }
}

frequencyCounter(SequentialSearchSt, 10, "tale.txt");
