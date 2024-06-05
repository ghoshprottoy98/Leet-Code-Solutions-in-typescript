// Time:  O(1)
// Space: O(1)

class Solution {
    maxA(N: number): number {
        if (N < 7) {
            return N;
        }
        if (N === 10) {  // the following rule doesn't hold when N = 10
            return 20;
        }
        let n = Math.floor(N / 5) + 1;  // n3 + n4 increases one every 5 keys
        // (1) n     =     n3 +     n4
        // (2) N + 1 = 4 * n3 + 5 * n4
        //     5 x (1) - (2) => 5*n - N - 1 = n3
        let n3 = 5 * n - N - 1;
        let n4 = n - n3;
        return Math.pow(3, n3) * Math.pow(4, n4);
    }
}
