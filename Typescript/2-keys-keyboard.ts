class Solution {
    minSteps(n: number): number {
        let result: number = 0;
        // the answer is the sum of prime factors
        for (let p = 2; p * p <= n; ++p) {
            while (n % p === 0) {
                result += p;
                n /= p;
            }
        }
        result += (n > 1) ? n : 0;
        return result;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.minSteps(10)); // Output: 7
