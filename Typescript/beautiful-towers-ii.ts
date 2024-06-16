// Time:  O(n)
// Space: O(n)

// mono stack
class Solution {
    maximumSumOfHeights(maxHeights: number[]): number {
        const left: bigint[] = new Array(maxHeights.length).fill(0n);
        let stk: bigint[] = [-1n];
        
        for (let i = 0n, curr = 0n; i < BigInt(maxHeights.length); ++i) {
            while (stk[stk.length - 1] !== stk[0] && maxHeights[Number(stk[stk.length - 1])] >= maxHeights[Number(i)]) {
                const j = stk.pop()!;
                curr -= (j - stk[stk.length - 1]) * BigInt(maxHeights[Number(j)]);
            }
            curr += (i - stk[stk.length - 1]) * BigInt(maxHeights[Number(i)]);
            stk.push(i);
            left[Number(i)] = curr;
        }

        let result = 0n, right = 0n;
        stk = [BigInt(maxHeights.length)];
        
        for (let i = BigInt(maxHeights.length) - 1n, curr = 0n; i >= 0; --i) {
            while (stk[stk.length - 1] !== stk[0] && maxHeights[Number(stk[stk.length - 1])] >= maxHeights[Number(i)]) {
                const j = stk.pop()!;
                curr -= (stk[stk.length - 1] - j) * BigInt(maxHeights[Number(j)]);
            }
            curr += (stk[stk.length - 1] - i) * BigInt(maxHeights[Number(i)]);
            stk.push(i);
            right = curr;
            result = result > (left[Number(i)] + right - BigInt(maxHeights[Number(i)])) ? result : (left[Number(i)] + right - BigInt(maxHeights[Number(i)]));
        }
        
        return Number(result);
    }
}
