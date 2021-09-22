class MyQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];
  private stack1IsEmpty(): boolean {
    return this.stack1.length === 0;
  }
  private stack2IsEmpty(): boolean {
    return this.stack2.length === 0;
  }
  private moveToStack2(): void {
    if (!this.stack2IsEmpty()) return;
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop() as number);
    }
  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    this.moveToStack2();
    return this.stack2.pop() as number;
  }

  peek(): number {
    this.moveToStack2();
    return this.stack2[this.stack2.length - 1];
  }

  empty(): boolean {
    return this.stack1IsEmpty() && this.stack2IsEmpty();
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
