
// Time:  O(n)
// Space: O(1)

// two pointers, greedy
class Solution {
    appendCharacters(s: string, t: string): number {
        for (let j = 0, i = 0; j < t.length; ++j) {
            for (; i <= s.length; ++i) {
                if (i === s.length) {
                    return t.length - j;
                }
                if (s[i] === t[j]) {
                    ++i;
                    break;
                }
            }
        }
        return 0;
    }
}
