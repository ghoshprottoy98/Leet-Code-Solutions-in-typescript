

let rotate = function(matrix: number[][]): void {
    let len: number = matrix.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        for (let j = 0; j < len; j++) {
            let temp: number = matrix[i][j];
            matrix[i][j] = matrix[len - 1 - i][j];
            matrix[len - 1 - i][j] = temp;
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            let temp: number = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};
