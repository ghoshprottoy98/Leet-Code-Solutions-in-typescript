class Solution {
    canReorderDoubled(A: number[]): boolean {
        let count: Map<number, number> = new Map();
        
        // Count frequency of each number
        for (const x of A) {
            count.set(x, (count.get(x) || 0) + 1);
        }
        
        // Get unique numbers and sort them by absolute value
        let keys: number[] = Array.from(count.keys());
        keys.sort((a, b) => Math.abs(a) - Math.abs(b));
        
        // Check and update counts
        for (const x of keys) {
            if (count.get(x)! > (count.get(2 * x) || 0)) {
                return false;
            }
            count.set(2 * x, (count.get(2 * x) || 0) - count.get(x)!);
        }
        
        return true;
    }
}
