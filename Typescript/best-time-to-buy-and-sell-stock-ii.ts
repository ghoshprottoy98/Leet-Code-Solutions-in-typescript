function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_SAFE_INTEGER; 
    let maxProfit = 0;
  
    for (let i = 0; i < prices.length; i++) {
      const currentPrice = prices[i];
  
      
      if (currentPrice < minPrice || i === 0) {
        minPrice = currentPrice; 
        maxProfit = 0; 
      } else {
        maxProfit = Math.max(maxProfit, currentPrice - minPrice); 
      }
    }
  
    return maxProfit;
  }
  
  function maxProfitOptimized(prices: number[]): number {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      const priceDiff = prices[i] - prices[i - 1];
      profit += priceDiff > 0 ? priceDiff : 0; 
    }
    return profit;
  }
  
  function maxProfitPeaksValleys(prices: number[]): number {
    if (prices.length < 2) return 0;
  
    let peak = prices[0];
    let valley = prices[0];
    let profit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      while (i < prices.length && prices[i] <= prices[i - 1]) {
        i++; 
      }
      valley = prices[i - 1];
  
      while (i < prices.length && prices[i] >= prices[i - 1]) {
        i++;
      }
      peak = prices[i - 1];
  
      profit += peak - valley;
    }
  
    return profit;
  }
  