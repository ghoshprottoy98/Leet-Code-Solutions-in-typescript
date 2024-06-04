class Solution {
    threeSumMulti(A: number[], target: number): number {
        const count: Map<number, number> = new Map();
        for (const a of A) {
            count.set(a, (count.get(a) || 0) + 1);
        }
        let result: number = 0;
        count.forEach((val1, key1) => {
            count.forEach((val2, key2) => {
                const i: number = key1, j: number = key2, k: number = target - i - j;
                if (!count.has(k)) {
                    return;
                }
                if (i === j && j === k) {
                    result += (val1 * (val1 - 1) * (val1 - 2)) / 6;
                } else if (i === j && j !== k) {
                    result += (val1 * (val1 - 1) / 2) * (count.get(k) as number);
                } else if (i < j && j < k) {
                    result += val1 * val2 * (count.get(k) as number);
                }
            });
        });
        return result % (1e9 + 7);
    }
}
