// Time:  O(n)
// Space: O(1)

class Solution {
    maxScoreIndices(nums: number[]): number[] {
        const total: number = nums.reduce((acc, curr) => acc + curr, 0);
        const result: number[] = [];
        let zeros: number = 0;
        let mx: number = 0;
        for (let i = 0; i <= nums.length; ++i) {
            zeros += ((i - 1 >= 0) ? (nums[i - 1] === 0 ? 1 : 0) : 0);
            if (zeros + (total - (i - zeros)) > mx) {
                mx = zeros + (total - (i - zeros));
                result.length = 0;
            }
            if (zeros + (total - (i - zeros)) === mx) {
                result.push(i);
            }
        }
        return result;
    }
}
