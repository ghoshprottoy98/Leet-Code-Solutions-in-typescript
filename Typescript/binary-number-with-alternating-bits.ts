// Time:  O(1)
// Space: O(1)

class Solution {
    hasAlternatingBits(n: number): boolean {
        let curr = n % 2;
        n = Math.floor(n / 2);
        while (n > 0) {
            if (curr === n % 2) {
                return false;
            }
            curr = n % 2;
            n = Math.floor(n / 2);
        }
        return true;
    }
}
