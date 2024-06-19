// Time:  O(n)
// Space: O(1)

class Solution {
    orArray(nums: number[]): number[] {
        const result: number[] = new Array(nums.length - 1);
        for (let i = 0; i + 1 < nums.length; ++i) {
            result[i] = nums[i] | nums[i + 1];
        }
        return result;
    }
}
