const numDecodings = (s: string): number => {
    const len: number = s.length;
    let num: number = 0;
    const matrix: number[][] = new Array(len);

    if (len === 0) return len;

    for (let i = 0; i < len; i++) {
        matrix[i] = new Array(len);
        if (s[i] !== '0') {
            matrix[i][i] = 1;
        } else {
            matrix[i][i] = 0;
        }
    }

    let i = 0;
    for (let j = 1; j < len; j++) {
        let subOne: number = 0;
        let subTwo: number = 0;
        const subTwoStr: number = parseInt(s.substring(j - 1, j + 1));

        if (s[j] !== '0') {
            subOne = matrix[i][j - 1];
        }
        if (subTwoStr > 9 && subTwoStr < 27) {
            subTwo = j - i === 1 ? 1 : matrix[i][j - 2];
        }

        if (subOne === 0 && subTwo === 0) return 0;

        matrix[i][j] = subOne + subTwo;
        console.log(matrix[i][j]);
    }

    return matrix[0][len - 1];
};
