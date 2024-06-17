class Solution {
    binarySearchableNumbers(nums: number[]): number {
        const n = nums.length;
        const right = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
        
        for (let i = n; i >= 1; --i) {
            right[i - 1] = Math.min(right[i], nums[i - 1]);
        }

        const result = new Set<number>();
        let left = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < n; ++i) {
            if (left <= nums[i] && nums[i] <= right[i + 1]) {
                result.add(nums[i]);
            }
            left = Math.max(left, nums[i]);
        }

        return result.size;
    }
}
