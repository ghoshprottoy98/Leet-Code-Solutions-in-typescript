// Time:  O(logn)
// Space: O(1)

class Solution {
    brokenCalc(X: number, Y: number): number {
        let result = 0;
        while (X < Y) {
            if (Y % 2 === 1) {
                ++Y;
            } else {
                Y /= 2;
            }
            ++result;
        }
        return result + (X - Y);
    }
}
