function setZeroes(matrix: number[][]): void {
    if (!matrix.length) return;

    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    let rowZero = false;
    let colZero = false;

    // Mark rows and columns containing zeroes
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) rowZero = true;
                if (j === 0) colZero = true;
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set zeroes based on markers in first row and first column
    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set zeroes for the first row and first column if needed
    if (rowZero) {
        for (let i = 0; i < colLen; i++) {
            matrix[0][i] = 0;
        }
    }
    if (colZero) {
        for (let i = 0; i < rowLen; i++) {
            matrix[i][0] = 0;
        }
    }
}
