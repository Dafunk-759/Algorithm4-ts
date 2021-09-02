import { ST, frequencyCounter } from "./ST.js";

class BSTNode<Key, Value> {
  constructor(
    public key: Key,
    public val: Value | null,
    public left: BSTNode<Key, Value> | null = null,
    public right: BSTNode<Key, Value> | null = null,
    public N: number = 1
  ) {
    this.key = key;
    this.val = val;
    this.left = left;
    this.right = right;
    this.N = N;
  }
}

class BST<Key, Value> extends ST<Key, Value> {
  private root: BSTNode<Key, Value> | null = null;
  private cp: (key1: Key, key2: Key) => number;
  constructor(cp: (key1: Key, key2: Key) => number) {
    super();
    this.cp = cp;
  }
  private _size(x: BSTNode<Key, Value> | null) {
    return x === null ? 0 : x.N;
  }
  size() {
    return this._size(this.root);
  }
  private _get(
    x: BSTNode<Key, Value> | null,
    key: Key
  ): Value | null {
    if (x === null) return null;
    let cmp = this.cp(key, x.key);
    if (cmp < 0) return this._get(x.left, key);
    else if (cmp > 0) return this._get(x.right, key);
    else return x.val;
  }
  get(key: Key) {
    return this._get(this.root, key);
  }
  private _put(
    x: BSTNode<Key, Value> | null,
    key: Key,
    val: Value | null
  ): BSTNode<Key, Value> {
    if (x === null)
      return new BSTNode<Key, Value>(key, val);
    let cmp = this.cp(key, x.key);
    if (cmp < 0) x.left = this._put(x.left, key, val);
    else if (cmp > 0)
      x.right = this._put(x.right, key, val);
    else x.val = val;
    x.N = this._size(x.left) + this._size(x.right) + 1;
    return x;
  }
  put(key: Key, value: Value | null) {
    this.root = this._put(this.root, key, value);
  }
  private *_keys(
    x: BSTNode<Key, Value>
  ): Generator<Key, void, unknown> {
    if (x.left !== null) {
      for (const key of this._keys(x.left)) {
        yield key;
      }
    }
    yield x.key;
    if (x.right !== null) {
      for (const key of this._keys(x.right)) {
        yield key;
      }
    }
  }
  *keys() {
    if (this.root === null) {
      throw new Error("no element");
    }
    for (const key of this._keys(this.root)) {
      yield key;
    }
  }
}

class MakeST extends BST<string, number> {
  constructor() {
    super((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  }
}

frequencyCounter(MakeST, 2, "tinyTale.txt");
