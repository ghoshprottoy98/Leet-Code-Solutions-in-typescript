function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) {
        return [];
    }
    
    let rowBegin = 0,
        rowEnd = matrix.length - 1,
        colBegin = 0,
        colEnd = matrix[0].length - 1,
        res: number[] = [];
    
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // left->right
        for (let i = colBegin; i <= colEnd; i++) {
            res.push(matrix[rowBegin][i]);
        }
        rowBegin++;
        
        // top->bottom
        for (let i = rowBegin; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd]);
        }
        colEnd--;
        
        // right->left
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                res.push(matrix[rowEnd][i]);
            }
            rowEnd--;
        }
        
        // bottom->top
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                res.push(matrix[i][colBegin]);
            }
            colBegin++;
        }
    }
    
    return res;
}
