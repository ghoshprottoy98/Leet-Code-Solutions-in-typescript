// Time:  O(n)
// Space: O(1)

// math
class Solution {
    averageValue(nums: number[]): number {
        let total = 0, cnt = 0;
        for (const x of nums) {
            if (x % 6 !== 0) {
                continue;
            }
            total += x;
            ++cnt;
        }
        return cnt ? Math.floor(total / cnt) : 0;
    }
}
