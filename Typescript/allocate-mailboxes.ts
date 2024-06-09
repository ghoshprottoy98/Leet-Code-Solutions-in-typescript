// Time:  O(m * n^2)
// Space: O(n)

class Solution {
    minDistance(houses: number[], k: number): number {
        houses.sort((a, b) => a - b);
        const prefix: number[] = new Array(houses.length + 1).fill(0);
        for (let i = 0; i < houses.length; ++i) {
            prefix[i + 1] = prefix[i] + houses[i];
        }
        const dp: number[] = new Array(houses.length).fill(0);
        for (let j = 0; j < houses.length; ++j) {
            dp[j] = this.cost(prefix, 0, j);
        }
        for (let m = 1; m < k; ++m) {
            for (let j = houses.length - 1; j >= 0; --j) {
                for (let i = m; i <= j; ++i) {
                    dp[j] = Math.min(dp[j], dp[i - 1] + this.cost(prefix, i, j));
                }
            }
        }
        return dp[dp.length - 1];
    }

    private cost(prefix: number[], i: number, j: number): number {
        return (prefix[j + 1] - prefix[Math.floor((i + j + 1) / 2)]) -
               (prefix[Math.floor((i + j) / 2) + 1] - prefix[i]);
    }
}
