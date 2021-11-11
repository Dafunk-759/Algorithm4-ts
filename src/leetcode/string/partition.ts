const partition = (s: string): string[][] => {
  const n = s.length
  const dp: boolean[][] = new Array(n)
    .fill(0)
    .map((_) => new Array(n).fill(true))
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
    }
  }

  const ret: string[][] = []
  const dfs = (startIndex: number, path: string[]) => {
    if (startIndex >= n) ret.push(path)

    for (let i = startIndex; i < n; i++) {
      if (!dp[startIndex][i]) continue
      dfs(i + 1, path.concat(s.slice(startIndex, i + 1)))
    }
  }
  dfs(0, [])
  return ret;
}
