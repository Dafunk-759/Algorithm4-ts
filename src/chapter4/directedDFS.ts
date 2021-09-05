import { makeDigraph } from "./digraph.js";

type Digraph = ReturnType<typeof makeDigraph>;

function directedDFS(
  G: Digraph,
  sOrSources: number | number[]
) {
  const marked = new Array<boolean>(G.V()).fill(false);

  if (typeof sOrSources === "number") {
    dfs(G, sOrSources);
  } else {
    for (const s of sOrSources) {
      if (!marked[s]) dfs(G, s);
    }
  }

  function dfs(G: Digraph, v: number) {
    marked[v] = true;
    for (const w of G.adj(v)) {
      if (!marked[w]) dfs(G, w);
    }
  }

  return function isMarked(v: number) {
    return marked[v];
  };
}

function test() {
  const g = makeDigraph("tinyDG.txt");
  const s = [1, 2, 6];
  const isMarked = directedDFS(g, s);
  console.log("S: ", s);
  for (let v = 0; v < g.V(); v++) {
    if (isMarked(v)) console.log(v);
  }
}

test();
