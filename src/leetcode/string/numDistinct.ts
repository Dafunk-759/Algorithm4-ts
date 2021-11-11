const numDistinct = (s: string, t: string): number => {
  const m = s.length
  const n = t.length
  if (n > m) return 0

  //dp[i][j] 表示s为s[i:],t为t[j:]
  const dp = new Array(m + 1)
    .fill(0)
    .map((_) => new Array(n + 1).fill(0))
  for(let i = 0; i <= m; i++) {
    dp[i][n] = 1
  }
  for(let i = m - 1; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      if(s[i] === t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j]
      }else {
        dp[i][j] = dp[i + 1][j]
      }
    }
  }
  return dp[0][0]
}
