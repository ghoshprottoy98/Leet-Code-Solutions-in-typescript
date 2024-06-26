class Solution {
    digitSum(s: string, k: number): string {
        while (s.length > k) {
            let new_s: string = '';
            let curr: number = 0;
            for (let i = 0; i < s.length; ++i) {
                curr += parseInt(s[i]);
                if (i % k === k - 1 || i === s.length - 1) {
                    new_s += curr.toString();
                    curr = 0;
                }
            }
            s = new_s;
        }
        return s;
    }
}
