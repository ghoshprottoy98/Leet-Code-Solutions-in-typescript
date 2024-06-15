// Time:  O(m + n)
// Space: O(1)

class Solution {
    backspaceCompare(S: string, T: string): boolean {
        let i = S.length - 1;
        let j = T.length - 1;

        while (i >= 0 || j >= 0) {
            if (this.findNextChar(S, &i) !== this.findNextChar(T, &j)) {
                return false;
            }
        }
        return true;
    }

    private findNextChar(s: string, i: { value: number }): string {
        let skip = 0;

        while (i.value >= 0) {
            if (s[i.value] === '#') {
                skip++;
            } else if (skip > 0) {
                skip--;
            } else {
                return s[i.value];
            }
            i.value--;
        }
        return '\0';
    }
}
