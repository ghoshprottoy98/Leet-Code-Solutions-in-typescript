// Time:  O(n)
// Space: O(1)

// bit manipulation
class Solution {
    subsequenceSumOr(nums: number[]): number {
        let result = 0n;
        let prefix = 0n;
        for (const x of nums) {
            prefix += BigInt(x);
            result |= BigInt(x) | prefix;
        }
        return Number(result);
    }
}
