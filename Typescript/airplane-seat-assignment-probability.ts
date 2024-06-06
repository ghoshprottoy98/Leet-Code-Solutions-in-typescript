// Time:  O(1)
// Space: O(1)

class Solution {
    nthPersonGetsNthSeat(n: number): number {
        return n !== 1 ? 0.5 : 1.0;
    }
}

class Solution2 {
    nthPersonGetsNthSeat(n: number): number {
        let dp: number[] = [1.0, 0.0]; // zero-indexed
        for (let i = 2; i <= n; ++i) {
            dp[i % 2] = 1.0 / i + dp[(i - 1) % 2] * (i - 1) / i;
        }
        return dp[n % 2];
    }
}
