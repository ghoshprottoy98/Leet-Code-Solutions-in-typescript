// Time:  O(n)
// Space: O(1)

class Solution {
    xorAllNums(nums1: number[], nums2: number[]): number {
        let result = 0;

        if (nums2.length % 2 !== 0) {
            result ^= nums1.reduce((acc, curr) => acc ^ curr, 0);
        }

        if (nums1.length % 2 !== 0) {
            result ^= nums2.reduce((acc, curr) => acc ^ curr, 0);
        }

        return result;
    }
}
