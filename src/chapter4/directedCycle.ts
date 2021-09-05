import { makeDigraph } from "./digraph.js";

type Digraph = ReturnType<typeof makeDigraph>;

export function directedCycle(G: Digraph) {
  const marked: boolean[] = [];
  const edgeTo: number[] = [];
  let cycle: number[] | null = null;
  const onStack: boolean[] = [];

  for (let v = 0; v < G.V(); v++) {
    if (!marked[v]) dfs(G, v);
  }

  function dfs(G: Digraph, v: number) {
    onStack[v] = true;
    marked[v] = true;

    for (let w of G.adj(v)) {
      if (hasCycle()) return;
      else if (!marked[w]) {
        edgeTo[w] = v;
        dfs(G, w);
      } else if (onStack[w]) {
        cycle = [];
        for (let x = v; x !== w; x = edgeTo[x]) {
          cycle.push(x);
        }
        cycle.push(w);
        cycle.push(v);
      }
    }
    onStack[v] = false;
  }

  function hasCycle() {
    return cycle !== null;
  }

  function getCycle() {
    return cycle;
  }

  return {
    hasCycle,
    getCycle,
  };
}

function test() {
  const g = makeDigraph("tinyDG.txt");
  const { getCycle } = directedCycle(g);
  console.log(getCycle());
}

// test();
