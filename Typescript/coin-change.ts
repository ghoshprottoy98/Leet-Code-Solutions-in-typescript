type Coin = number;

function coinChange(coins: Coin[], amount: number): number {
  if (amount === 0) return 0;

  const dp: number[] = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0; 

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1); 
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]; 
}
