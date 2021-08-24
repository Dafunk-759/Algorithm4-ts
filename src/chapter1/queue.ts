interface Queue<T> extends Iterable<T> {
  enqueue(item: T): void;
  dequeue(): T;
  isEmpty(): boolean;
  size(): number;
}
