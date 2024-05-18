function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix.length || !matrix[0].length) {
        return false;
    }

    const rowLength = matrix.length;
    const columnLength = matrix[0].length;
    let row = 0;
    let col = columnLength - 1;

    while (row < rowLength && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }

    return false;
}
