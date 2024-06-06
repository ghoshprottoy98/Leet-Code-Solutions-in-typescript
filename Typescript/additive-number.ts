// Time:  O(n^3)
// Space: O(n)

class Solution {
    isAdditiveNumber(num: string): boolean {
        for (let i = 1; i < num.length; ++i) {
            for (let j = i + 1; j < num.length; ++j) {
                let s1 = num.substring(0, i);
                let s2 = num.substring(i, j);
                if ((s1.length > 1 && s1[0] === '0') ||
                    (s2.length > 1 && s2[0] === '0')) {
                    continue;
                }
                let next = this.add(s1, s2);
                let cur = s1 + s2 + next;
                while (cur.length < num.length) {
                    s1 = s2;
                    s2 = next;
                    next = this.add(s1, s2);
                    cur += next;
                }
                if (cur === num) {
                    return true;
                }
            }
        }
        return false;
    }

    private add(m: string, n: string): string {
        let res = '';
        let res_length = Math.max(m.length, n.length);
        let carry = 0;
        for (let i = 0; i < res_length; ++i) {
            let m_digit_i = i < m.length ? m[m.length - 1 - i].charCodeAt(0) - '0'.charCodeAt(0) : 0;
            let n_digit_i = i < n.length ? n[n.length - 1 - i].charCodeAt(0) - '0'.charCodeAt(0) : 0;
            let sum = carry + m_digit_i + n_digit_i;
            carry = Math.floor(sum / 10);
            sum %= 10;
            res = String.fromCharCode('0'.charCodeAt(0) + sum) + res;
        }
        if (carry) {
            res = '1' + res;
        }
        return res;
    }
}
