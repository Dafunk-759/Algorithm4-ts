import { Bag } from "../chapter1/bag.js";
import * as util from "../util/indexNode.js";

interface IGraph {
  V(): number;
  E(): number;
  addEdge(v: number, w: number): void;
  adj(v: number): Iterable<number>;
  toString(): string;
}

export class Graph implements IGraph {
  private _V: number;
  private _E: number;
  private _adj: Bag<number>[];
  constructor(V: number) {
    this._V = V;
    this._E = 0;
    this._adj = new Array<Bag<number>>(V);
    for (let v = 0; v < V; v++) {
      this._adj[v] = new Bag<number>();
    }
  }
  V(): number {
    return this._V;
  }
  E(): number {
    return this._E;
  }
  addEdge(v: number, w: number): void {
    this._adj[v].add(w);
    this._adj[w].add(v);
    this._E++;
  }
  adj(v: number): Iterable<number> {
    return this._adj[v];
  }
  toString(): string {
    let ret = `${this.V()} vertices, ${this.E()} edges\n`;
    for (let v = 0; v < this.V(); v++) {
      ret += `${v}: `;
      for (const w of this.adj(v)) {
        ret += `${w} `;
      }
      ret += "\n";
    }
    return ret;
  }
  static degree(G: Graph, v: number): number {
    let degree = 0;
    for (const w of G.adj(v)) {
      degree++;
    }
    return degree;
  }
  static maxDegree(G: Graph): number {
    let max = 0;
    for (let v = 0; v < G.V(); v++) {
      if (this.degree(G, v) > max) {
        max = this.degree(G, v);
      }
    }
    return max;
  }
  static avgDegree(G: Graph): number {
    return (2 * G.E()) / G.V();
  }
  static numberOfSelfLoops(G: Graph): number {
    let count = 0;
    for (let v = 0; v < G.V(); v++) {
      for (const w of G.adj(v)) {
        if (v === w) count++;
      }
    }
    return count / 2;
  }
}

function testGraph() {
  const input = util.read(
    "tinyG.txt",
    "number"
  ) as number[];

  const V = input.shift() as number,
    E = input.shift() as number;
  const graph = new Graph(V);

  for (let i = 0; i < E; i++) {
    const v = input.shift() as number,
      w = input.shift() as number;
    graph.addEdge(v, w);
  }

  console.log(graph.toString());
}
testGraph();
