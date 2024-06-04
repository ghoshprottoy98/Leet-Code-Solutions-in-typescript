class Solution {
    threeSumSmaller(nums: number[], target: number): number {
        nums.sort((a, b) => a - b);
        const n: number = nums.length;

        let count: number = 0;
        for (let k: number = 2; k < n; ++k) {
            let i: number = 0, j: number = k - 1;
            while (i < j) {
                if (nums[i] + nums[j] + nums[k] >= target) {
                    --j;
                } else {
                    count += j - i;
                    ++i;
                }
            }
        }

        return count;
    }
}
