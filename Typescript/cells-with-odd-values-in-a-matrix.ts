// Time:  O(n + m)
// Space: O(n + m)

class Solution {
    oddCells(n: number, m: number, indices: number[][]): number {
        const row: number[] = Array(n).fill(0);
        const col: number[] = Array(m).fill(0);
        
        for (const idx of indices) {
            row[idx[0]] ^= 1;
            col[idx[1]] ^= 1;
        }
        
        const rowSum = row.reduce((acc, val) => acc + val, 0);
        const colSum = col.reduce((acc, val) => acc + val, 0);
        
        return rowSum * m + colSum * n - 2 * rowSum * colSum;
    }
}

// Example usage:
const solution = new Solution();
const result = solution.oddCells(2, 3, [[0,1],[1,1]]);
console.log(result); // Output: 6
