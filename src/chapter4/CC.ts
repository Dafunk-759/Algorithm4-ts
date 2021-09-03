import { Graph } from "./graph.js";

class CC {
  private marked: boolean[];
  private _id: number[];
  private _count: number = 0;
  constructor(G: Graph) {
    this.marked = new Array<boolean>(G.V()).fill(false);
    this._id = new Array<number>(G.V());
    for (let s = 0; s < G.V(); s++) {
      if (!this.marked[s]) {
        this.dfs(G, s);
        this._count++;
      }
    }
  }
  private dfs(G: Graph, v: number): void {
    this.marked[v] = true;
    this._id[v] = this._count;
    for (const w of G.adj(v)) {
      if (!this.marked[w]) {
        this.dfs(G, w);
      }
    }
  }
  connected(v: number, w: number): boolean {
    return this._id[v] === this._id[w];
  }
  id(v: number): number {
    return this._id[v];
  }
  count() {
    return this._count;
  }
}

function testCC() {
  const G = Graph.makeGraph();
  const cc = new CC(G);
  let M = cc.count();
  console.log(M + " components");
  const components: number[][] = [];
  for (let i = 0; i < M; i++) {
    components[i] = [];
  }
  for (let v = 0; v < G.V(); v++) {
    components[cc.id(v)].unshift(v);
  }
  for (let i = 0; i < M; i++) {
    console.log(components[i].join(" "));
  }
}

testCC();
