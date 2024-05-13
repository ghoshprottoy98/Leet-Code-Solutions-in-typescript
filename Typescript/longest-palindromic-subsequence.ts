let longestPalindromeSubseq = function(s: string): number {
    let len: number = s.length;
    let matrix: number[][] = new Array(len);

    for (let i: number = 0; i < len; i++) {
        matrix[i] = new Array(len);
        matrix[i][i] = 1;
    }

    for (let i: number = len - 1; i >= 0; i--) {
        for (let j: number = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                matrix[i][j] = j - i === 1 ? 2 : matrix[i + 1][j - 1] + 2;
            } else {
                matrix[i][j] = max(matrix[i][j - 1], matrix[i + 1][j]);
            }
        }
    }

    return matrix[0][len - 1];
};

let max = function(a: number, b: number): number {
    if (a > b) return a;
    else return b;
};
