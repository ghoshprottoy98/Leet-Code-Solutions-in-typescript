class Solution {
    public numFactoredBinaryTrees(A: number[]): number {
      const MOD = 1e9 + 7; 
      A.sort((a, b) => a - b); 
  
      const dp: { [key: number]: number } = {}; 
      for (const num of A) {
        dp[num] = 1; 
  
        for (let j = 0; j < A.length; j++) {
          if (num % A[j] === 0 && dp[A[j]]) { 
            const leftFactor = A[j];
            const rightFactor = num / A[j];
        if (dp[leftFactor] && dp[rightFactor]) {
              dp[num] = (dp[num] + (dp[leftFactor] * dp[rightFactor]) % MOD) % MOD;
            }
          }
        }
      }

      let totalTrees = 0;
      for (const count of Object.values(dp)) {
        totalTrees = (totalTrees + count) % MOD;
      }
  
      return totalTrees;
    }
  }