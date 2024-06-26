class Solution {
    maxCoins(nums: number[]): number {
        let coins: number[] = [];
        coins.push(1);
        
        for (const n of nums) {
            if (n > 0) {
                coins.push(n);
            }
        }
        
        coins.push(1);
        
        let maxCoins: number[][] = new Array(coins.length);
        for (let i = 0; i < coins.length; i++) {
            maxCoins[i] = new Array(coins.length).fill(0);
        }
        
        for (let k = 2; k < coins.length; ++k) {
            for (let left = 0; left < coins.length - k; ++left) {
                let right = left + k;
                for (let i = left + 1; i < right; ++i) {
                    maxCoins[left][right] = Math.max(maxCoins[left][right],
                        coins[left] * coins[i] * coins[right] +
                        maxCoins[left][i] + maxCoins[i][right]);
                }
            }
        }
        
        return maxCoins[0][coins.length - 1];
    }
}
