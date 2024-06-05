// Time:  O(1)
// Space: O(1)

class Solution {
    addDigits(num: number): number {
        return (num - 1) % 9 + 1;
    }
}
