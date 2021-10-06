function maxProfit(prices: number[]): number {
  const nToMax = new Array(prices.length).fill(0);
  let lowest = prices[0];
  for (let today = 1; today < nToMax.length; today++) {
    lowest = Math.min(lowest, prices[today]);
    nToMax[today] = Math.max(
      prices[today] - lowest,
      nToMax[today - 1]
    );
  }
  return nToMax[nToMax.length - 1];
}

function maxProfitDP(prices: number[]): number {
  const dp = new Array(prices.length)
    .fill(0)
    .map((_) => ({ lowest: 0, maxProfit: 0 }));
  dp[0].lowest = prices[0];
  dp[0].maxProfit = 0;
  for (let i = 1; i < dp.length; i++) {
    dp[i].lowest = Math.min(dp[i - 1].lowest, prices[i]);
    dp[i].maxProfit = Math.max(
      dp[i - 1].maxProfit,
      prices[i] - dp[i - 1].lowest
    );
  }
  return dp[dp.length - 1].maxProfit;
}
function maxProfit2(prices: number[]): number {
  const dp = new Array(prices.length).fill(0);
  if(dp.length <= 1) return 0;
  dp[1] = Math.max(dp[0], prices[1] - prices[0]);
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 1] + prices[i] - prices[i - 1]
    );
  }
  return dp[dp.length - 1];
}
function maxProfit3(prices: number[]): number {
  
};