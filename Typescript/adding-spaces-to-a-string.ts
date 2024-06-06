// Time:  O(n)
// Space: O(1)

// Inplace solution
class Solution {
    addSpaces(s: string, spaces: number[]): string {
        let prev = s.length;
        s = s.padEnd(s.length + spaces.length, ' ');
        for (let i = spaces.length - 1; i >= 0; --i) {
            for (let j = prev - 1; j >= spaces[i]; --j) {
                s = s.slice(0, j + 1 + i) + s[j] + s.slice(j + 1 + i, s.length - 1);
            }
            s = s.slice(0, spaces[i] + i) + ' ' + s.slice(spaces[i] + i, s.length - 1);
            prev = spaces[i];
        }
        return s;
    }
}
