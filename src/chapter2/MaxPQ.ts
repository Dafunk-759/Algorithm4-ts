import * as util from "../util/indexNode.js";

interface IMaxPQ<T> {
  insert(v: T): void;
  max(): T;
  delMax(): T;
  isEmpty(): boolean;
  size(): number;
}

class MaxPQ<T> implements IMaxPQ<T> {
  private pq: T[];
  private N: number = 0;
  private exch(a: number, b: number) {
    const temp = this.pq[a];
    this.pq[a] = this.pq[b];
    this.pq[b] = temp;
  }
  private cp(a: number, b: number) {
    return this._cp(this.pq[a], this.pq[b]);
  }
  private _cp: (a: T, b: T) => number;

  constructor(maxN: number, _cp: (a: T, b: T) => number) {
    this.pq = new Array(maxN + 1);
    this._cp = _cp;
    this.cp = this.cp.bind(this);
    this.exch = this.exch.bind(this);
  }

  isEmpty() {
    return this.N === 0;
  }
  size() {
    return this.N;
  }
  insert(v: T) {
    this.pq[++this.N] = v;
    swim(this.N, this.cp, this.exch);
  }
  delMax() {
    const max = this.pq[1];
    this.exch(1, this.N--);
    sink(1, this.cp, this.exch, this.N);
    return max;
  }
  max() {
    return this.pq[1];
  }
}

function swim(
  k: number,
  cp: (a: number, b: number) => number,
  exch: (a: number, b: number) => void
): void {
  let i: number;
  while (k > 1 && cp((i = Math.floor(k / 2)), k) < 0) {
    exch(i, k);
    k = i;
  }
}

export function sink(
  k: number,
  cp: (a: number, b: number) => number,
  exch: (a: number, b: number) => void,
  N: number
) {
  let i: number;
  while ((i = 2 * k) <= N) {
    if (i < N && cp(i, i + 1) < 0) i++;
    if (cp(k, i) > 0) break;
    exch(k, i);
    k = i;
  }
}

interface Deal {
  name: string;
  date: string;
  money: number;
}

function pickMin(M: number) {
  const input = util.read("tinyBatch.txt") as string[];
  const pq = new MaxPQ<Deal>(
    M + 1,
    (a, b) => a.money - b.money
  );
  for (let i = 0; i < input.length; i += 3) {
    const el: Deal = {} as Deal;
    el.name = input[i];
    el.date = input[i + 1];
    el.money = parseFloat(input[i + 2]);
    pq.insert(el);
    if (pq.size() > M) pq.delMax();
  }
  while (!pq.isEmpty()) console.log(pq.delMax());
}
// pickMin(10);
