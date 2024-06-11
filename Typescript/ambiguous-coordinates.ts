 // Time:  O(n^4)
// Space: O(n^2)

class Solution {
    ambiguousCoordinates(S: string): string[] {
        const result: string[] = [];
        for (let i = 1; i < S.length - 2; ++i) {
            const lefts = this.make(S, 1, i);
            const rights = this.make(S, i + 1, S.length - 2 - i);
            for (const left of lefts) {
                for (const right of rights) {
                    const s = `(${left}, ${right})`;
                    result.push(s);
                }
            }
        }
        return result;
    }

    private make(S: string, i: number, n: number): string[] {
        const result: string[] = [];
        for (let d = 1; d <= n; ++d) {
            const left = S.substr(i, d);
            const right = S.substr(i + d, n - d);
            if ((left[0] !== '0' || left === "0") && right[right.length - 1] !== '0') {
                let s = left;
                if (right.length > 0) {
                    s += `.${right}`;
                }
                result.push(s);
            }
        }
        return result;
    }
}
