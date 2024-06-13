// Time:  O(nlogn)
// Space: O(1)

// sort, two pointers, sliding window
class Solution {
    maxFrequencyScore(nums: number[], k: number): number {
        nums.sort((a, b) => a - b);
        let curr: bigint = BigInt(0);
        let right = 0, left = 0;
        for (; right < nums.length; ++right) {
            curr += BigInt(nums[right] - nums[(left + right) >> 1]);
            if (!(curr <= BigInt(k))) {
                curr -= BigInt(nums[((left + 1) + right) >> 1] - nums[left++]);
            }
        }
        return right - left;
    }
}