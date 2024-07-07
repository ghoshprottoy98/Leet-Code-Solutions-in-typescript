class Solution {
    cellsInRange(s: string): string[] {
        const result: string[] = [];
        for (let x = s[0]; x <= s[3]; ++x) {
            for (let y = s[1]; y <= s[4]; ++y) {
                result.push(`${String.fromCharCode(x)}${String.fromCharCode(y)}`);
            }
        }
        return result;
    }
}
