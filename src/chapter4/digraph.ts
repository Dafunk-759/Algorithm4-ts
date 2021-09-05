import * as util from "../util/indexNode.js";

interface Digraph {
  V(): number;
  E(): number;
  addEdge(v: number, w: number): void;
  adj(v: number): Iterable<number>;
  reverse(): Digraph;
  toString(): string;
}

export function makeDigraph(
  vOrFilename: number | string
): Digraph {
  let _V: number;
  let _E: number = 0;
  let _adj: number[][] = [];
  if (typeof vOrFilename === "number") {
    _V = vOrFilename;
    for (let v = 0; v < _V; v++) {
      _adj[v] = [];
    }
  } else {
    const input = util.read(
      vOrFilename,
      "number"
    ) as number[];

    _V = input.shift() as number;
    const e = input.shift() as number;
    for (let v = 0; v < _V; v++) {
      _adj[v] = [];
    }

    for (let i = 0; i < e; i++) {
      const v = input.shift() as number,
        w = input.shift() as number;

      addEdge(v, w);
    }
  }

  function V(): number {
    return _V;
  }
  function E(): number {
    return _E;
  }
  function addEdge(v: number, w: number): void {
    _adj[v].unshift(w);
    _E++;
  }
  function adj(v: number): Iterable<number> {
    return _adj[v];
  }
  function reverse() {
    const r = makeDigraph(_V);
    for (let v = 0; v < _V; v++) {
      for (const w of adj(v)) {
        r.addEdge(w, v);
      }
    }
    return r;
  }
  function toString() {
    let ret = `${V()} vertices, ${E()} edges\n`;
    for (let v = 0; v < V(); v++) {
      ret += `${v}: `;
      for (const w of adj(v)) {
        ret += `${w} `;
      }
      ret += "\n";
    }
    return ret;
  }

  return {
    V,
    E,
    addEdge,
    adj,
    reverse,
    toString,
  };
}

function testDG(fileName: string = "tinyDG.txt") {
  const g = makeDigraph(fileName);
  console.log(g.toString());
  const g1 = makeDigraph(10);
  console.log(g1.toString());
}

// testDG();
