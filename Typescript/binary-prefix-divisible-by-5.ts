// Time:  O(n)
// Space: O(1)

class Solution {
    prefixesDivBy5(A: number[]): boolean[] {
        for (let i = 1; i < A.length; ++i) {
            A[i] = (A[i] + A[i - 1] * 2) % 5;
        }
        return A.map(x => x % 5 === 0);
    }
}
