class Solution {
    buildArray(nums: number[]): number[] {
        for (let i = 0; i < nums.length; ++i) {
            for (let prev = i, curr = nums[i];
                 curr >= 0 && curr !== i;
                 [prev, curr] = [curr, ~nums[prev]]) {
                [nums[prev], nums[curr]] = [~nums[curr], (prev === i) ? ~nums[prev] : nums[prev]];
            }
        }
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] < 0) {
                nums[i] = ~nums[i];
            }
        }
        return nums;
    }
}