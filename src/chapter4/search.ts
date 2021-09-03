import { Graph } from "./graph.js";

abstract class Search {
  abstract marked(v: number): boolean;
  abstract count(): number;
}

class DepthFirstSearch extends Search {
  private _marked: boolean[];
  private _count: number = 0;
  constructor(G: Graph, s: number) {
    super();
    this._marked = new Array<boolean>(G.V()).fill(false);
    this.dfs(G, s);
  }
  private dfs(G: Graph, v: number): void {
    this._marked[v] = true;
    this._count++;
    for (const w of G.adj(v)) {
      if (!this.marked(w)) this.dfs(G, w);
    }
  }
  marked(v: number) {
    return this._marked[v];
  }
  count() {
    return this._count;
  }
}

function testSearch(
  S: new (G: Graph, s: number) => Search,
  s: number
) {
  const G = Graph.makeGraph();
  const search = new S(G, s);
  let str = "";
  for (let v = 0; v < G.V(); v++) {
    if (search.marked(v)) {
      str += `${v} `;
    }
  }
  console.log(str);
  str = "";
  if (search.count() !== G.V()) {
    str += "NOT ";
  }
  console.log(str + "connected");
}

testSearch(DepthFirstSearch, 7);
