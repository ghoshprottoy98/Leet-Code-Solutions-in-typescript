class Solution {
    subarrayBitwiseORs(A: number[]): number {
        const result: Set<number> = new Set();
        let curr: Set<number> = new Set();

        for (const i of A) {
            const next: Set<number> = new Set([i]);
            for (const j of curr) {
                next.add(i | j);
            }
            curr = next;
            for (const j of curr) {
                result.add(j);
            }
        }

        return result.size;
    }
}
