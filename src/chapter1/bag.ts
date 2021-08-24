interface IBag<T> extends Iterable<T> {
  add(item: T): void;
  isEmpty(): boolean;
  size(): number;
}
