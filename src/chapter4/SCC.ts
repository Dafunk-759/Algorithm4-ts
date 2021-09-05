import { makeDigraph } from "./digraph.js";
import { depthFirstOrder } from "./topological.js";
type Digraph = ReturnType<typeof makeDigraph>;

function kosarajuSCC(G: Digraph) {
  const marked: boolean[] = [];
  const id: number[] = [];
  let count: number = 0;

  const order = depthFirstOrder(G.reverse());
  for (const s of order.reversePost()) {
    if (!marked[s]) {
      dfs(G, s);
      count += 1;
    }
  }

  function dfs(G: Digraph, v: number) {
    marked[v] = true;
    id[v] = count;
    for (const w of G.adj(v)) {
      if (!marked[w]) {
        dfs(G, w);
      }
    }
  }

  return {
    stronglyConnected(v: number, w: number) {
      return id[v] === id[w];
    },
    id(v: number) {
      return id[v];
    },
    count() {
      return count;
    },
  };
}

function test() {
  const g = makeDigraph("tinyDG.txt");
  const scc = kosarajuSCC(g);
  console.log(scc.count() + " components");
  for (let v = 0; v < g.V(); v++) {
    console.log(`${v}: ${scc.id(v)}`);
  }
}

// test();
