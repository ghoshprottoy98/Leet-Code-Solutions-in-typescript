class Solution {
    maxSum(nums: number[], k: number): number {
        const MOD = 1e9 + 7;

        const bitLength = (x: number): number => {
            return x !== 0 ? 32 - Math.clz32(x) : 1;
        };

        const l = bitLength(Math.max(...nums));
        const cnt: number[] = new Array(l).fill(0);
        
        for (let i = 0; i < l; ++i) {
            for (const x of nums) {
                if (x & (1 << i)) {
                    ++cnt[i];
                }
            }
        }

        let result = 0;
        for (let j = 1; j <= k; ++j) {
            let curr = 0;
            for (let i = 0; i < l; ++i) {
                if (cnt[i] >= j) {
                    curr += 1 << i;
                }
            }
            result = (result + BigInt(curr) * BigInt(curr)) % BigInt(MOD);
        }
        
        return Number(result);
    }
}
