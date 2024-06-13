// Time:  O(n)
// Space: O(1)

// greedy, sliding window
class Solution {
    checkArray(nums: number[], k: number): boolean {
        let curr = 0;
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] - curr < 0) {
                return false;
            }
            nums[i] -= curr;
            curr += nums[i];
            if (i - (k - 1) >= 0) {
                curr -= nums[i - (k - 1)];
            }
        }
        return curr === 0;
    }
}
