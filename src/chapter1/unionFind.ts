import * as util from "../util/indexNode.js";

interface UF {
  //在p和q之间添加一条连接
  union(p: number, q: number): void;
  //p所在分量的标识符(0 - n-1)
  find(p: number): number;
  //如果p和q存在于同一个分量则返回true
  connected(p: number, q: number): boolean;
  //连通分量的数量
  count(): number;
}

class UnionFind implements UF {
  private id: number[];
  private _count: number;
  private sz: number[];

  constructor(N: number) {
    this._count = N;
    this.id = new Array(N);
    this.sz = new Array(N);
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
      this.sz[i] = 1;
    }
  }
  count() {
    return this._count;
  }
  connected(p: number, q: number) {
    return this.find(p) === this.find(q);
  }
  //quick-find (n^2)
  // find(p: number) {
  //   return this.id[p];
  // }
  // union(p: number, q: number) {
  //   const pId = this.find(p);
  //   const qId = this.find(q);

  //   if (pId === qId) return;

  //   for (let i = 0; i < this.id.length; i++) {
  //     if (this.id[i] === pId) this.id[i] = qId;
  //   }
  //   this._count--;
  // }
  //weighted-quick-union
  find(p: number): number {
    while (p !== this.id[p]) p = this.id[p];
    return p;
  }
  union(p: number, q: number) {
    const i = this.find(p);
    const j = this.find(q);
    if (i === j) return;
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j;
      this.sz[j] += this.sz[i];
    } else {
      this.id[j] = i;
      this.sz[i] += this.sz[j];
    }
    this._count--;
  }
}

//test
(() => {
  const input = util.read(
    "mediumUF.txt",
    "number"
  ) as number[];

  const uf = new UnionFind(input.shift() as number);

  console.time("union-find");
  while (input.length > 0) {
    const p = input.shift() as number;
    const q = input.shift() as number;
    if (uf.connected(p, q)) continue;
    uf.union(p, q);
    // console.log(p + " " + q);
  }
  console.log(uf.count() + "components");
  console.timeEnd("union-find");
})();

export {};
