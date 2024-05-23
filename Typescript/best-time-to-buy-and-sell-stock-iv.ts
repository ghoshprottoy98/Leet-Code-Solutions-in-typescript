interface Transaction {
    hold: number; // Maximum profit if we hold the stock on this day
    sell: number;  // Maximum profit if we sell the stock on this day
  }
  
  function maxProfit(k: number, prices: number[]): number {
    const maxK = k;
    const len = prices.length;
  
    if (!len) return 0;
    if (maxK > len / 2) {
      return maxProfit_Infinite(prices);
    }
  
    const dp: Transaction[][] = [];
    for (let i = 0; i < len; i++) {
      dp.push([]);
      for (let j = 0; j < maxK + 1; j++) {
        dp[i].push({ hold: 0, sell: Number.MIN_SAFE_INTEGER });
      }
    }
  
    for (let i = 0; i < len; i++) {
      for (let k = maxK; k >= 1; k--) {
        if (i === 0) {
          dp[i][k] = { hold: 0, sell: -prices[i] };
        } else {
          dp[i][k].hold = Math.max(dp[i - 1][k].hold, dp[i - 1][k].sell + prices[i]);
          dp[i][k].sell = Math.max(dp[i - 1][k].sell, dp[i - 1][k - 1].hold - prices[i]);
        }
      }
    }
  
    return dp[len - 1][maxK].hold;
  }
  
  function maxProfit_Infinite(prices: number[]): number {
    let n = prices.length;
    let dpI0 = 0, dpI1 = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      const temp = dpI0;
      dpI0 = Math.max(dpI0, dpI1 + prices[i]);
      dpI1 = Math.max(dpI1, temp - prices[i]);
    }
    return dpI0;
  }
  