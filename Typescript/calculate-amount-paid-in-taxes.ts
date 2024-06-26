class Solution {
    calculateTax(brackets: number[][], income: number): number {
        let result = 0;
        let prev = 0;
        for (const b of brackets) {
            result += Math.max((Math.min(b[0], income) - prev) * b[1] / 100.0, 0);
            prev = b[0];
        }
        return result;
    }
}
