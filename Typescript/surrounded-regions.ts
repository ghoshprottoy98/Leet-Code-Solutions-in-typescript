let solve = function(board: string[][]) {
    if (board.length === 0) {
        return;
    }
    
    let rowlen: number = board.length,
        collen: number = board[0].length,
        rowecp: number = rowlen - 1,
        colecp: number = collen - 1;

    if (rowlen <= 2 || collen <= 2) {
        return;
    }
        
    for (let i = 0; i < collen; i++) {
        if (board[0][i] === 'O') {
            board[0][i] = '1';
            if (board[1][i] === 'O' && i !== 0 && i !== collen - 1) {
                judZero(1, i, rowlen, collen, board);
            }
        }
       
        if (board[rowecp][i] === 'O') {
            board[rowecp][i] = '1';
            if (board[rowecp - 1][i] === 'O' && i !== 0 && i !== collen - 1) {
                judZero(rowecp - 1, i, rowlen, collen, board);
            }
        }

    }
    
    
    for (let i = 1; i < rowecp; i++) {
        if (board[i][0] === 'O') {
            board[i][0] = '1';
            if (board[i][1] === 'O' && i !== 0 && i !== rowecp) {
                judZero(i, 1, rowlen, collen, board);
            }
        }

    
        if (board[i][colecp] === 'O') {
            board[i][colecp] = '1';
            if (board[i][colecp - 1] === 'O' && i !== 0 && i !== rowecp) {
                judZero(i, colecp - 1, rowlen, collen, board);
            }
        }

    }
    
    for (let i = 0; i < rowlen; i++) {
        for (let j = 0; j < collen; j++) {
            if (board[i][j] === '1') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
    
    return;
};

let judZero = function(x: number, y: number, rowlen: number, collen: number, matrix: string[][]) {
 
    matrix[x][y] = '1';
    
    if (x - 1 > 1 && matrix[x - 1][y] === 'O') {
        judZero(x - 1, y, rowlen, collen, matrix);
    }
    if (x + 1 < rowlen - 2 && matrix[x + 1][y] === 'O') {
        judZero(x + 1, y, rowlen, collen, matrix);
    }
    if (y - 1 > 1 && matrix[x][y - 1] === 'O') {
        judZero(x, y - 1, rowlen, collen, matrix);
    }
    if (y + 1 < collen - 2 && matrix[x][y + 1] === 'O') {
        judZero(x, y + 1, rowlen, collen, matrix);
    }
};
