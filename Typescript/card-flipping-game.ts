class Solution {
    flipgame(fronts: number[], backs: number[]): number {
        let same = new Set<number>();
        
        // Find numbers that are the same on both sides
        for (let i = 0; i < fronts.length; ++i) {
            if (fronts[i] === backs[i]) {
                same.add(fronts[i]);
            }
        }
        
        let result = Number.MAX_VALUE;
        
        // Find the minimum number that can be flipped
        for (const n of fronts) {
            if (!same.has(n)) {
                result = Math.min(result, n);
            }
        }
        for (const n of backs) {
            if (!same.has(n)) {
                result = Math.min(result, n);
            }
        }
        
        // If no valid number found, return 0
        return result !== Number.MAX_VALUE ? result : 0;
    }
}
