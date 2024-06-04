function gameOfLife(board: number[][]): void {
    const n = board.length;
    const m = board[0].length;
    const flag = board.map(col => col.map(() => 0));
    
    // Flag
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const ele = board[i][j];
        if (ele) {
          for (let tbIndex = Math.max(i - 1, 0); tbIndex < Math.min(i + 2, n); tbIndex++) {
            for (let lrIndex = Math.max(j - 1, 0); lrIndex < Math.min(j + 2, m); lrIndex++) {
              if (tbIndex === i && lrIndex === j) continue;
              flag[tbIndex][lrIndex]++;
            }
          }
        }
      }
    }
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] && (flag[i][j] < 2 || flag[i][j] > 3)) {
          board[i][j] = 0;
        } else if ((board[i][j] && flag[i][j] >= 2 && flag[i][j] <= 3) || (!board[i][j] && flag[i][j] === 3)) {
          board[i][j] = 1;
        }
      }
    }
  }
  