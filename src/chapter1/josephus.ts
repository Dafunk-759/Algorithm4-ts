import { Queue } from "./queue.js";

function josephus(N: number, M: number): void {
  //初始化队列
  const q: Queue<number> = new Queue();
  for (let i = 0; i < N; i++) {
    q.enqueue(i);
  }
  while (!q.isEmpty()) {
    for (let i = 0; i < M - 1; i++) {
      q.enqueue(q.dequeue());
    }
    console.log(q.dequeue());
  }
}

josephus(7, 2);
