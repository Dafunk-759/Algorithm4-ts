const isInterleave = (
  s1: string,
  s2: string,
  s3: string
): boolean => {
  const m = s1.length
  const n = s2.length
  const l = s3.length
  if (m + n !== l) return false
  const dp = new Array(m + 1)
    .fill(0)
    .map((_) => new Array(n + 1).fill(false))
  dp[0][0] = true
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const p = i + j - 1
      if (i > 0)
        dp[i][j] =
          dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[p])
      if (j > 0)
        dp[i][j] =
          dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[p])
    }
  }
  return dp[m][n]
}
