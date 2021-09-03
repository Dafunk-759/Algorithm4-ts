import { Graph } from "./graph.js";

class Paths {
  private marked: boolean[];
  private edgeTo: number[];
  private s: number;
  constructor(G: Graph, s: number) {
    this.marked = new Array<boolean>(G.V());
    this.edgeTo = new Array<number>(G.V());
    this.s = s;
    this.dfs(G, s);
  }
  private dfs(G: Graph, v: number): void {
    this.marked[v] = true;
    for (const w of G.adj(v)) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.dfs(G, w);
      }
    }
  }
  hasPathTo(v: number): boolean {
    return this.marked[v];
  }
  pathTo(v: number): Iterable<number> | null {
    if (!this.hasPathTo(v)) return null;
    const path: number[] = [];
    for (let x = v; x !== this.s; x = this.edgeTo[x]) {
      path.unshift(x);
    }
    path.unshift(this.s);
    return path;
  }
}

export class BreadFirstPaths {
  private marked: boolean[];
  private edgeTo: number[];
  private s: number;
  constructor(G: Graph, s: number) {
    this.marked = new Array<boolean>(G.V());
    this.edgeTo = new Array<number>(G.V());
    this.s = s;
    this.bfs(G, s);
  }
  private bfs(G: Graph, s: number): void {
    const queue: number[] = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
      let v = queue.shift() as number;
      for (const w of G.adj(v)) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
  }
  hasPathTo(v: number): boolean {
    return this.marked[v];
  }
  pathTo(v: number): Iterable<number> | null {
    if (!this.hasPathTo(v)) return null;
    const path: number[] = [];
    for (let x = v; x !== this.s; x = this.edgeTo[x]) {
      path.unshift(x);
    }
    path.unshift(this.s);
    return path;
  }
}

function testPaths(s: number) {
  const G = Graph.makeGraph("tinyCG.txt");
  const search = new BreadFirstPaths(G, s);
  let str = "";
  for (let v = 0; v < G.V(); v++) {
    str = `${s} to ${v}: `;
    if (search.hasPathTo(v)) {
      for (const x of search.pathTo(
        v
      ) as Iterable<number>) {
        if (x === s) str += x;
        else str += `-${x}`;
      }
    }
    console.log(str);
  }
}

// testPaths(0);
