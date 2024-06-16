class Solution {
    maximumSumOfHeights(maxHeights: number[]): number {
        const left: bigint[] = new Array(maxHeights.length).fill(BigInt(0));
        const stk: bigint[] = [BigInt(-1)];
        let curr: bigint = BigInt(0);

        for (let i = 0; i < maxHeights.length; ++i) {
            while (stk[stk.length - 1] !== stk[0] && maxHeights[Number(stk[stk.length - 1])] >= maxHeights[i]) {
                const j = Number(stk.pop());
                curr -= BigInt((j - Number(stk[stk.length - 1])) * maxHeights[j]);
            }
            curr += BigInt((i - Number(stk[stk.length - 1])) * maxHeights[i]);
            stk.push(BigInt(i));
            left[i] = curr;
        }

        let result: bigint = BigInt(0);
        let right: bigint = BigInt(0);
        curr = BigInt(0);
        stk.length = 0;
        stk.push(BigInt(maxHeights.length));

        for (let i = maxHeights.length - 1; i >= 0; --i) {
            while (stk[stk.length - 1] !== stk[0] && maxHeights[Number(stk[stk.length - 1])] >= maxHeights[i]) {
                const j = Number(stk.pop());
                curr -= BigInt((Number(stk[stk.length - 1]) - j) * maxHeights[j]);
            }
            curr += BigInt((Number(stk[stk.length - 1]) - i) * maxHeights[i]);
            stk.push(BigInt(i));
            right = curr;
            result = BigInt(Math.max(Number(result), Number(left[i] + right - BigInt(maxHeights[i]))));
        }

        return Number(result);
    }
}
