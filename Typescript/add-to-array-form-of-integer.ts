// Time:  O(n + logk)
// Space: O(1)

class Solution {
    addToArrayForm(A: number[], K: number): number[] {
        A.reverse();
        let carry: number = K;
        let i: number = 0;
        A[i] += carry;
        carry = Math.floor(A[i] / 10);
        A[i] %= 10;
        while (carry) {
            ++i;
            if (i < A.length) {
                A[i] += carry;
            } else {
                A.push(carry);
            }
            carry = Math.floor(A[i] / 10);
            A[i] %= 10;
        }
        A.reverse();
        return A;
    }
}
