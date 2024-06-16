// Time:  O(m * n)
// Space: O(m + n)

class Solution {
    minTotalDistance(grid: number[][]): number {
        let x: number[] = [];
        let y: number[] = [];
        
        // Populate x and y with coordinates of all '1's in the grid
        for (let i = 0; i < grid.length; ++i) {
            for (let j = 0; j < grid[0].length; ++j) {
                if (grid[i][j] === 1) {
                    x.push(i);
                    y.push(j);
                }
            }
        }
        
        // Find median of x and y
        x.sort((a, b) => a - b);
        y.sort((a, b) => a - b);
        
        const mid_x = x[Math.floor(x.length / 2)];
        const mid_y = y[Math.floor(y.length / 2)];
        
        // Calculate the minimum total distance
        let sum = 0;
        for (let i = 0; i < grid.length; ++i) {
            for (let j = 0; j < grid[0].length; ++j) {
                if (grid[i][j] === 1) {
                    sum += Math.abs(mid_x - i) + Math.abs(mid_y - j);
                }
            }
        }
        
        return sum;
    }
}
