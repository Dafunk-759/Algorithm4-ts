const minCut = (s: string): number => {
  //g[i][j]表示 s[i:j]是否为回文
  const n = s.length
  const g: boolean[][] = new Array(n)
    .fill(0)
    .map((_) => new Array(n).fill(true))
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      g[i][j] = s[i] === s[j] && g[i + 1][j - 1]
    }
  }

  const f = new Array(n).fill(Number.POSITIVE_INFINITY)
  for(let i = 0; i < n; i++) {
    if(g[0][i]) {
      f[i] = 0
    }
  }
  for(let j = 0; j < n; j++) {
    for(let i = 1; i <= j; i++) {
      if(g[i][j]) {
        f[j] = Math.min(f[j], f[i - 1] + 1)
      }
    }
  }
  return f[n - 1]
}
