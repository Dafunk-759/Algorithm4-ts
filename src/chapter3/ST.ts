interface IST<Key, Value> {
  put(key: Key, value: Value | null): void;
  get(key: Key): Value | null;
  delete(key: Key): void;
  contains(key: Key): boolean;
  isEmpty(): boolean;
  size(): number;
  keys(): Iterable<Key>;
}
