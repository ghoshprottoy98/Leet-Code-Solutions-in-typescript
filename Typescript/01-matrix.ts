// Time:  O(m * n)
// Space: O(1)

class Solution {
    updateMatrix(matrix: number[][]): number[][] {
        for (let i = 0; i < matrix.length; ++i) {
            for (let j = 0; j < matrix[i].length; ++j) {
                if (matrix[i][j] === 0) {
                    continue;
                }
                matrix[i][j] = Number.MAX_SAFE_INTEGER;
                if (i > 0 && matrix[i - 1][j] !== Number.MAX_SAFE_INTEGER) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i - 1][j] + 1);
                }
                if (j > 0 && matrix[i][j - 1] !== Number.MAX_SAFE_INTEGER) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i][j - 1] + 1);
                }
            }
        }

        for (let i = matrix.length - 1; i >= 0; --i) {
            for (let j = matrix[i].length - 1; j >= 0; --j) {
                if (matrix[i][j] === 0) {
                    continue;
                }
                if (i < matrix.length - 1 && matrix[i + 1][j] !== Number.MAX_SAFE_INTEGER) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j] + 1);
                }
                if (j < matrix[i].length - 1 && matrix[i][j + 1] !== Number.MAX_SAFE_INTEGER) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1);
                }
            }
        }

        return matrix;
    }
}