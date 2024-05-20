const uniquePaths = (m: number, n: number): number => {
    const list: number[][] = [];
    for (let i = 0; i < n; i++) {
      list.push([]);
      for (let j = 0; j < m; j++) {
        if (i === 0 || j === 0) {
          list[i][j] = 1;
        } else {
          list[i][j] = list[i - 1][j] + list[i][j - 1];
        }
      }
    }
  
    return list[n - 1][m - 1];
  };
  