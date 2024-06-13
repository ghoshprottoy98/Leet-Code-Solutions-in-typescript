class Solution {
    numberOfArithmeticSlices(A: number[]): number {
        let result = 0;
        const dp: Map<number, number>[] = new Array(A.length).fill(new Map<number, number>());
        
        for (let i = 1; i < A.length; ++i) {
            for (let j = 0; j < i; ++j) {
                const diff = A[i] - A[j];
                const diffLL = BigInt(diff); // Use BigInt for long long equivalent
                
                if (!dp[i].has(diffLL)) {
                    dp[i].set(diffLL, 0);
                }
                
                dp[i].set(diffLL, dp[i].get(diffLL)! + 1);
                
                if (dp[j].has(diffLL)) {
                    dp[i].set(diffLL, dp[i].get(diffLL)! + dp[j].get(diffLL)!);
                    result += dp[j].get(diffLL)!;
                }
            }
        }
        
        return result;
    }
}

// Example usage:
const solution = new Solution();
const A = [2, 4, 6, 8, 10];
console.log(solution.numberOfArithmeticSlices(A)); // Output: 7
