// Time:  O(logn)
// Space: O(1)

class Solution {
    alternateDigitSum(n: number): number {
        let result: number = 0;
        let sign: number = 1;
        for (; n; n = Math.floor(n / 10)) {
            sign *= -1;
            result += sign * (n % 10);
        }
        return sign * result;
    }
}
