import * as util from "../util/indexNode.js";

export interface Edge {
  getWeight(): number;
  either(): number;
  other(vertex: number): number;
  compareTo(that: Edge): number;
  toString(): string;
}

function makeEdge(
  v: number,
  w: number,
  weight: number
): Edge {
  function getWeight() {
    return weight;
  }

  return {
    getWeight,
    either() {
      return v;
    },
    other(vertex: number) {
      if (vertex === v) return w;
      else if (vertex === w) return v;
      else throw new Error("Inconsistent edge");
    },
    compareTo(that: Edge) {
      if (getWeight() < that.getWeight()) return -1;
      else if (getWeight() > that.getWeight()) return +1;
      else return 0;
    },
    toString() {
      return `${v}-${w} ${weight} `;
    },
  };
}

interface WeightedGraph {
  getV: () => number;
  getE: () => number;
  addEdge: (e: Edge) => void;
  adjs: (v: number) => Edge[];
  edges: () => Edge[];
  toString: () => string;
}

function makeEWG(V: number): WeightedGraph {
  let E = 0;
  const adj: Edge[][] = [];
  for (let v = 0; v < V; v++) {
    adj[v] = [];
  }

  function getV() {
    return V;
  }
  function getE() {
    return E;
  }
  function addEdge(e: Edge) {
    let v = e.either(),
      w = e.other(v);
    adj[v].push(e);
    adj[w].push(e);
    E += 1;
  }
  function adjs(v: number) {
    return adj[v];
  }
  function edges() {
    const b: Edge[] = [];
    for (let v = 0; v < V; v++) {
      for (const e of adjs(v)) {
        if (e.other(v) > v) b.push(e);
      }
    }
    return b;
  }
  function toString() {
    let ret = `${V} vertex, ${E} edges\n`;
    for (const edge of edges()) {
      ret += `${edge.toString()}\n`;
    }
    return ret;
  }

  return {
    getV,
    getE,
    addEdge,
    adjs,
    edges,
    toString,
  };
}

export function makeEdgeWeightedGraph(
  vOrFilename: string | number
) {
  if (typeof vOrFilename === "number") {
    return makeEWG(vOrFilename);
  } else {
    const input = util.read(
      vOrFilename,
      "number"
    ) as number[];

    const g = makeEWG(input.shift() as number);
    const E = input.shift() as number;

    for (let i = 0; i < E; i++) {
      const v = input.shift() as number,
        w = input.shift() as number,
        weight = input.shift() as number;
      g.addEdge(makeEdge(v, w, weight));
    }

    return g;
  }
}

function test() {
  const g = makeEdgeWeightedGraph("tinyEWD.txt");
  console.log(g.toString());
}

// test();
