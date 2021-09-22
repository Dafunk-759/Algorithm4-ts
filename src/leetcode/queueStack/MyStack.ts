class MyStack {
  private queue: number[] = [];
  private isQueueEmpty(): boolean {
    return this.queue.length === 0;
  }
  private turnLastToFirst(): void {
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift() as number);
    }
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    if (this.isQueueEmpty()) throw new Error("empty");
    this.turnLastToFirst();
    return this.queue.shift() as number;
  }

  top(): number {
    if (this.isQueueEmpty()) throw new Error("empty");
    const top = this.pop();
    this.push(top as number);
    return top;
  }

  empty(): boolean {
    return this.isQueueEmpty();
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
