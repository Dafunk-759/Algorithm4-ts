//递归加缓存
function uniquePaths(m: number, n: number): number {
  const mem = (f: (r: number, c: number) => number) => {
    const cache: Record<string, number> = {};
    return (r: number, c: number) => {
      const key = `${r}-${c}`;
      if (cache[key] === undefined) cache[key] = f(r, c);
      return cache[key];
    };
  };
  const memUps = mem(uPs);
  function uPs(r: number, c: number): number {
    if (r < 1 || c < 1)
      throw new Error("bad row or column");
    if (r === 1 || c === 1) return 1;
    return memUps(r, c - 1) + memUps(r - 1, c);
  }
  return uPs(m, n);
}
//dp
function makePathMap() {
  const pathMap = new Map<string, number>();
  const getPaths = (r: number, c: number): number => {
    if (r < 1 || c < 1) throw new Error("bad r or c");
    if (r === 1 || c === 1) return 1;
    return pathMap.get(`${r}-${c}`);
  };
  const setPaths = (
    r: number,
    c: number,
    path: number
  ): void => {
    if (r < 1 || c < 1) throw new Error("bad r or c");
    if (r === 1 || c === 1) return;
    pathMap.set(`${r}-${c}`, path);
  };
  return {
    getPaths,
    setPaths,
  };
}
function uniquePathsDP(m: number, n: number): number {
  const pathMap = makePathMap();
  for (let r = 2; r <= m; r++) {
    for (let c = 2; c <= n; c++) {
      pathMap.setPaths(
        r,
        c,
        pathMap.getPaths(r - 1, c) +
          pathMap.getPaths(r, c - 1)
      );
    }
  }
  return pathMap.getPaths(m, n);
}
