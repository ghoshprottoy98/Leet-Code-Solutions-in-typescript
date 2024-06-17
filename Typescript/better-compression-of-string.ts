// Time:  O(n + 26)
// Space: O(26)

class Solution {
    betterCompression(compressed: string): string {
        const cnt: number[] = new Array(26).fill(0);
        let x: number = -1;
        let curr: number = 0;

        for (let i = 0; i < compressed.length; ++i) {
            if (!this.isDigit(compressed[i])) {
                x = compressed.charCodeAt(i) - 'a'.charCodeAt(0);
                continue;
            }
            curr = curr * 10 + (compressed.charCodeAt(i) - '0'.charCodeAt(0));
            if (i + 1 === compressed.length || !this.isDigit(compressed[i + 1])) {
                cnt[x] += curr;
                curr = 0;
            }
        }

        let result: string = '';
        for (let i = 0; i < cnt.length; ++i) {
            if (cnt[i] === 0) {
                continue;
            }
            result += String.fromCharCode('a'.charCodeAt(0) + i);
            result += cnt[i].toString();
        }
        return result;
    }

    private isDigit(char: string): boolean {
        return char >= '0' && char <= '9';
    }
}
