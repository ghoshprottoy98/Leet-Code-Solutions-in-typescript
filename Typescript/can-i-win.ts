class Solution {
    canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
        if ((1 + maxChoosableInteger) * (maxChoosableInteger / 2) < desiredTotal) {
            return false;
        }
        const lookup: Map<number, boolean> = new Map();
        return this.canIWinHelper(maxChoosableInteger, desiredTotal, 0, lookup);
    }

    private canIWinHelper(maxChoosableInteger: number, desiredTotal: number,
                          visited: number, lookup: Map<number, boolean>): boolean {

        if (lookup.has(visited)) {
            return lookup.get(visited)!;
        }
        let mask = 1;
        for (let i = 0; i < maxChoosableInteger; ++i) {
            if (!(visited & mask)) {
                if (i + 1 >= desiredTotal ||
                    !this.canIWinHelper(maxChoosableInteger, desiredTotal - (i + 1), visited | mask, lookup)) {
                    lookup.set(visited, true);
                    return true;
                }
            }
            mask <<= 1;
        }
        lookup.set(visited, false);
        return false;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.canIWin(10, 11)); // Example invocation
