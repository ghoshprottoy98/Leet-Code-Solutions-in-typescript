// Time:  O(n)
// Space: O(1)


class Solution {
    addBinary(a: string, b: string): string {
        let res: string = "";
        const resLen: number = Math.max(a.length, b.length);

        let carry: number = 0;
        for (let i = 0; i < resLen; ++i) {
            const aBitI: number = i < a.length ? parseInt(a[a.length - 1 - i]) : 0;
            const bBitI: number = i < b.length ? parseInt(b[b.length - 1 - i]) : 0;
            let sum: number = carry + aBitI + bBitI;
            carry = Math.floor(sum / 2);
            sum %= 2;
            res = (sum + "") + res;
        }
        if (carry) {
            res = (carry + "") + res;
        }
        return res;
    }
}
