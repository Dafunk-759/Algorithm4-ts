const numDecodings = (s: string): number => {
  const dp = new Array(s.length + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i < dp.length; i++) {
    if (s[i - 1] !== '0' && dp[i - 1]) dp[i] += dp[i - 1]
    if (
      s[i - 2] !== '0' &&
      dp[i - 2] &&
      Number(`${s[i - 2]}${s[i - 1]}`) <= 26
    )
      dp[i] += dp[i - 2]
  }
  return dp[dp.length - 1]
}
