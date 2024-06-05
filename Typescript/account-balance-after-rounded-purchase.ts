class Solution {
    accountBalanceAfterPurchase(purchaseAmount: number): number {
        return 100 - Math.floor((purchaseAmount + 5) / 10) * 10;
    }
}

// Example usage:
const solution = new Solution();
const purchaseAmount = 35;
const balance = solution.accountBalanceAfterPurchase(purchaseAmount);
console.log("Account balance after purchase:", balance);
