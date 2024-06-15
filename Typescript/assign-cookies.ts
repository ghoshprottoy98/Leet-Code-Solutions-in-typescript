// Time:  O(nlogn)
// Space: O(1)

class Solution {
    findContentChildren(g: number[], s: number[]): number {
        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);

        let result = 0;
        let i = 0;
        for (let j = 0; j < s.length; ++j) {
            if (i === g.length) {
                break;
            }
            if (s[j] >= g[i]) {
                ++i;
                ++result;
            }
        }
        return result;
    }
}
