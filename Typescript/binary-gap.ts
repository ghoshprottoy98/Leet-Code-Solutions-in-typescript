// Time:  O(logn) = O(1) due to n is a 32-bit number
// Space: O(1)

class Solution {
    binaryGap(N: number): number {
        let result = 0;
        let last = -1;
        for (let i = 0; i < 32; ++i) {
            if ((N >> i) & 1) {
                if (last !== -1) {
                    result = Math.max(result, i - last);
                }
                last = i;
            }
        }
        return result;
    }
}
