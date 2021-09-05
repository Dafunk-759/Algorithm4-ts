import { makeEdgeWeightedGraph, Edge } from "./edge.js";

type EWG = ReturnType<typeof makeEdgeWeightedGraph>;

function lazyPrimMST(G: EWG) {
  const marked: boolean[] = [];
  const mst: Edge[] = [];
  const pq: Edge[] = [];

  visit(G, 0);
  while (pq.length > 0) {
    const e = pq
      .sort((a, b) => a.compareTo(b))
      .shift() as Edge;
    const v = e.either(),
      w = e.other(v);
    if (marked[v] && marked[w]) continue;
    mst.push(e);
    if (!marked[v]) visit(G, v);
    if (!marked[w]) visit(G, w);
  }

  function visit(G: EWG, v: number): void {
    marked[v] = true;
    for (const e of G.adjs(v)) {
      if (!marked[e.other(v)]) pq.push(e);
    }
  }

  function edges() {
    return mst;
  }

  return {
    edges,
    weight() {
      return edges().reduce(
        (acc, curr) => acc + curr.getWeight(),
        0
      );
    },
  };
}

function test() {
  const g = makeEdgeWeightedGraph("mediumEWG.txt");
  const { edges, weight } = lazyPrimMST(g);
  for (const e of edges()) {
    console.log(e.toString());
  }
  console.log("weight: ", weight());
}

// test();
