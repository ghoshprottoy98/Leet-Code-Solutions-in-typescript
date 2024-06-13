class Solution {
    applyOperations(nums: number[]): number[] {
        for (let i = 0; i + 1 < nums.length; ++i) {
            if (nums[i] === nums[i + 1]) {
                nums[i] *= 2;
                nums[i + 1] = 0;
            }
        }
        let i = 0;
        for (const x of nums) {
            if (x !== 0) {
                nums[i++] = x;
            }
        }
        for (; i < nums.length; ++i) {
            nums[i] = 0;
        }
        return nums;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.applyOperations([2, 2, 0, 4]));  // Output should be [4, 4, 0, 0]
