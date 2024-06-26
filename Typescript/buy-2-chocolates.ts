class Solution {
    buyChoco(prices: number[], money: number): number {
        const minIdx = (exclude: number): number => {
            let j = -1;
            for (let i = 0; i < prices.length; ++i) {
                if (i !== exclude && (j === -1 || prices[j] > prices[i])) {
                    j = i;
                }
            }
            return j;
        };

        const i = minIdx(-1);
        const j = minIdx(i);
        
        return prices[i] + prices[j] <= money ? money - (prices[i] + prices[j]) : money;
    }
}

// Example usage:
const solution = new Solution();
const prices = [5, 10, 8, 7];
const money = 15;
console.log(solution.buyChoco(prices, money)); // Output: 5
