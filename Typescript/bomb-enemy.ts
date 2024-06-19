class Solution {
    maxKilledEnemies(grid: string[][]): number {
        let result: number = 0;
        if (grid.length === 0 || grid[0].length === 0) {
            return result;
        }
        
        const m: number = grid.length;
        const n: number = grid[0].length;
        
        // Initialize arrays for storing counts
        const down: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
        const right: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
        
        // Fill the down and right arrays
        for (let i = m - 1; i >= 0; --i) {
            for (let j = n - 1; j >= 0; --j) {
                if (grid[i][j] !== 'W') {
                    if (i + 1 < m) {
                        down[i][j] = down[i + 1][j];
                    }
                    if (j + 1 < n) {
                        right[i][j] = right[i][j + 1];
                    }
                    if (grid[i][j] === 'E') {
                        down[i][j]++;
                        right[i][j]++;
                    }
                }
            }
        }
        
        // Calculate left and up dynamically
        let left: number = 0;
        const up: number[] = new Array(n).fill(0);
        
        for (let i = 0; i < m; ++i) {
            left = 0;
            for (let j = 0; j < n; ++j) {
                if (grid[i][j] === 'W') {
                    up[j] = 0;
                    left = 0;
                } else if (grid[i][j] === 'E') {
                    up[j]++;
                    left++;
                } else {
                    result = Math.max(result, left + up[j] + right[i][j] + down[i][j]);
                }
            }
        }
        
        return result;
    }
}
