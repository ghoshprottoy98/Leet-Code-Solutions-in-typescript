class Solution {
    static readonly INF = Number.MAX_SAFE_INTEGER;

    minOperations(s1: string, s2: string, x: number): number {
        let parity = 0, curr = 0, prev = 0;
        let j = -1;

        for (let i = 0; i < s1.length; ++i) {
            if (s1[i] === s2[i]) {
                continue;
            }

            const tempCurr = curr;
            curr = Math.min(curr + x, j !== -1 ? prev + (i - j) * 2 : Solution.INF);
            prev = tempCurr;

            j = i;
            parity ^= 1;
        }

        return parity === 0 ? curr / 2 : -1;
    }
}
