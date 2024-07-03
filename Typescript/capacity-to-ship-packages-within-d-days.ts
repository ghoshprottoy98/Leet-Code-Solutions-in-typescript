// Time:  O(nlogr)
// Space: O(1)

class Solution {
    shipWithinDays(weights: number[], D: number): number {
        let left = Math.max(...weights);
        let right = weights.reduce((a, b) => a + b, 0);
        
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (this.possible(weights, D, mid)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }

    private possible(weights: number[], D: number, mid: number): boolean {
        let result = 1;
        let curr = 0;
        
        for (const w of weights) {
            if (curr + w > mid) {
                ++result;
                curr = 0;
            }
            curr += w;
        }
        
        return result <= D;
    }
}

// Usage example:
const solution = new Solution();
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const D = 5;
console.log(solution.shipWithinDays(weights, D)); // Output: expected result based on input
