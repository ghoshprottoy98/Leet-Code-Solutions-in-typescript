interface ProfitState {
    hold: number;
    sell: number;
  }
  
  function maxProfit(prices: number[]): number {
    const maxK = 2;
    const len = prices.length;
  
    if (!len) return 0;
  
    const dp: ProfitState[][] = [];
    for (let i = 0; i < len; i++) {
      dp.push([]);
      for (let j = 0; j < maxK + 1; j++) {
        dp[i].push({ hold: 0, sell: Number.MIN_SAFE_INTEGER });
      }
    }
  
    for (let i = 0; i < len; i++) {
      for (let k = maxK; k >= 1; k--) {
        if (i === 0) {
          dp[i][k] = { hold: 0, sell: -prices[i] }; // Initial state, can only hold
        } else {
          dp[i][k].hold = Math.max(dp[i - 1][k].hold, dp[i - 1][k].sell + prices[i]);
          dp[i][k].sell = Math.max(dp[i - 1][k].sell, dp[i - 1][k - 1].hold - prices[i]);
        }
      }
    }
  
    return dp[len - 1][maxK].sell; // Return the final sell value
  }
  