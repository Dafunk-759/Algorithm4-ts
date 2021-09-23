class Queue {
  private queue: number[] = [];
  private back(): number {
    if (this.isEmpty()) throw new Error("empty queue");
    return this.queue[this.queue.length - 1];
  }
  isEmpty(): boolean {
    return this.queue.length === 0;
  }
  front(): number {
    if (this.isEmpty()) throw new Error("empty queue");
    return this.queue[0];
  }
  pop(value: number): number | undefined {
    if (this.front() !== value) return undefined;
    return this.queue.shift();
  }
  push(value: number): void {
    while (!this.isEmpty() && value > this.back()) {
      this.queue.pop();
    }
    this.queue.push(value);
  }
}

function maxSlidingWindow(
  nums: number[],
  k: number
): number[] {
  const initQueue = (i: number, queue: Queue): Queue => {
    if (i >= k || i >= nums.length) return queue;
    queue.push(nums[i]);
    return initQueue(i + 1, queue);
  };

  const loop = (
    left: number,
    right: number,
    ret: number[],
    queue: Queue
  ): number[] => {
    if (right >= nums.length) return ret;

    queue.pop(nums[left - 1]);
    queue.push(nums[right]);
    ret.push(queue.front());
    return loop(left + 1, right + 1, ret, queue);
  };
  const initQ = initQueue(0, new Queue());

  return loop(1, k, [initQ.front()], initQ);
}
console.log(
  maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3),
  maxSlidingWindow([1], 1),
  maxSlidingWindow([1, -1], 1),
  maxSlidingWindow([9, 11], 2),
  maxSlidingWindow([4, -2], 2)
);
