class Solution {
    numOfArrays(n: number, m: number, k: number): number {
        const MOD: number = 1e9 + 7;
        // dp[l][i][j] = number of ways of constructing array length l with max element i at search cost j
        let dp: number[][][] = new Array(2);
        let prefix_dp: number[][][] = new Array(2);
        
        for (let i = 0; i < 2; i++) {
            dp[i] = new Array(m + 1);
            prefix_dp[i] = new Array(m + 1);
            for (let j = 0; j <= m; j++) {
                dp[i][j] = new Array(k + 1).fill(0);
                prefix_dp[i][j] = new Array(k + 1).fill(0);
            }
        }
        
        for (let i = 1; i <= m; i++) {
            dp[1][i][1] = 1;
            prefix_dp[1][i][1] = (prefix_dp[1][i - 1][1] + dp[1][i][1]) % MOD;
        }
        
        for (let l = 2; l <= n; l++) {
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= k; j++) {
                    dp[l % 2][i][j] = (i * dp[(l - 1) % 2][i][j] % MOD + prefix_dp[(l - 1) % 2][i - 1][j - 1]) % MOD;
                    prefix_dp[l % 2][i][j] = (prefix_dp[l % 2][i - 1][j] + dp[l % 2][i][j]) % MOD;
                }
            }
        }
        
        return prefix_dp[n % 2][m][k];
    }
}
