// Time:  O(n)
// Space: O(1)

class Solution {
    lastNonEmptyString(s: string): string {
        const cnt: number[] = new Array(26).fill(0);
        
        for (const char of s) {
            ++cnt[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }

        const mx: number = Math.max(...cnt);
        let result: string = '';

        for (let i = s.length - 1; i >= 0; --i) {
            if (cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] !== mx) {
                continue;
            }
            --cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
            result += s[i];
        }

        return result.split('').reverse().join('');
    }
}
