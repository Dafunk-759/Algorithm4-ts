import { makeDigraph } from "./digraph.js";
import { directedCycle } from "./directedCycle.js";

type Digraph = ReturnType<typeof makeDigraph>;

export function depthFirstOrder(G: Digraph) {
  const marked: boolean[] = [];
  const pre: number[] = [];
  const post: number[] = [];
  const reversePost: number[] = [];

  for (let v = 0; v < G.V(); v++) {
    if (!marked[v]) dfs(G, v);
  }

  function dfs(G: Digraph, v: number) {
    pre.push(v);
    marked[v] = true;
    for (const w of G.adj(v)) {
      if (!marked[w]) {
        dfs(G, w);
      }
    }
    post.push(v);
    reversePost.unshift(v);
  }

  return {
    pre() {
      return pre;
    },
    post() {
      return post;
    },
    reversePost() {
      return reversePost;
    },
  };
}

function topological(G: Digraph) {
  let order: number[] | null = null;

  const { hasCycle } = directedCycle(G);
  if (!hasCycle()) {
    const dfs = depthFirstOrder(G);
    order = dfs.reversePost();
  }

  return {
    order() {
      return order;
    },
    isDAG() {
      return order !== null;
    },
  };
}

function test() {
  const g = makeDigraph("topo.txt");
  const { order } = topological(g);
  console.log(order());
}

// test();
