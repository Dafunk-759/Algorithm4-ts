import { Graph } from "./graph.js";
import { BreadFirstPaths } from "./paths.js";
import fs from "fs";
import path from "path";

class SymbolGraph {
  private ST: Map<string, number>;
  private keys: string[];
  private G: Graph;
  constructor(input: string[], sp: string) {
    this.ST = new Map();
    for (const str of input) {
      const a = str.split(sp);
      for (let i = 0; i < a.length; i++) {
        if (!this.ST.has(a[i])) {
          this.ST.set(a[i], this.ST.size);
        }
      }
    }

    this.keys = new Array<string>(this.ST.size);
    for (const key of this.ST.keys()) {
      this.keys[this.ST.get(key) as number] = key;
    }
    this.G = new Graph(this.ST.size);

    for (const str of input) {
      const a = str.split(sp);
      const v = this.ST.get(a[0]) as number;
      for (let i = 1; i < a.length; i++) {
        this.G.addEdge(v, this.ST.get(a[i]) as number);
      }
    }
  }
  contains(s: string): boolean {
    return this.ST.has(s);
  }
  index(s: string): number {
    return this.ST.get(s) as number;
  }
  name(v: number): string {
    return this.keys[v];
  }
  Graph() {
    return this.G;
  }
}

function testSymbolGraph(
  fileName: "routes.txt" | "movies.txt",
  source: string
) {
  const delim = fileName === "movies.txt" ? "/" : " ";
  const input = fs
    .readFileSync(path.resolve("static", fileName), {
      encoding: "utf-8",
    })
    .trim()
    .split("\n");

  // const sg = new SymbolGraph(input, delim);
  // const G = sg.Graph();
  // for (const w of G.adj(sg.index(source))) {
  //   console.log(sg.name(w));
  // }
  degreesOfSeparation(
    input,
    delim,
    source,
    "Titanic (1997)"
  );
}

testSymbolGraph("movies.txt", "Animal House (1978)");

function degreesOfSeparation(
  input: string[],
  delim: string,
  source: string,
  sink: string
) {
  const sg = new SymbolGraph(input, delim);
  const G = sg.Graph();
  if (!sg.contains(source)) {
    console.log(source + "not in database.");
    return;
  }
  const s = sg.index(source);
  const bfs = new BreadFirstPaths(G, s);
  if (sg.contains(sink)) {
    const t = sg.index(sink);
    if (bfs.hasPathTo(t)) {
      for (const v of bfs.pathTo(t) as Iterable<number>) {
        console.log(sg.name(v));
      }
    } else {
      console.log("Not connected");
    }
  } else {
    console.log("Not in database");
  }
}
