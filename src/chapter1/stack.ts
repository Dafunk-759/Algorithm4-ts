interface IStack<T> extends Iterable<T> {
  push(item: T): void;
  pop(): T;
  isEmpty(): boolean;
  size(): number;
}

//js中数组为关联数组，数组长度可变，这里模仿定长数组实现栈
export class Stack<T> implements IStack<T> {
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
