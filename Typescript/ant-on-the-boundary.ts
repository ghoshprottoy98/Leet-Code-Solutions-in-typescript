// Time:  O(n)
// Space: O(1)

class Solution {
    returnToBoundaryCount(nums: number[]): number {
        let result = 0;
        let curr = 0;
        for (const x of nums) {
            curr += x;
            if (curr === 0) {
                ++result;
            }
        }
        return result;
    }
}
