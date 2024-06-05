// Time:  O(1)
// Space: O(1)

class Solution {
    isSameAfterReversals(num: number): boolean {
        return num === 0 || num % 10 !== 0;
    }
}
