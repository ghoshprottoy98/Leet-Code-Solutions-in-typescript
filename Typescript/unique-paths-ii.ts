const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
    const n: number = obstacleGrid.length;
    if (!n) return 0;
    const m: number = obstacleGrid[0].length;
    if (!m) return 0;
  
    for (let i: number = 0; i < n; i++) {
      for (let j: number = 0; j < m; j++) {
        if (i === 0 && j === 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j] ? 0 : 1;
        } else if (i == 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j] || !obstacleGrid[i][j - 1] ? 0 : 1;
        } else if (j == 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j] || !obstacleGrid[i - 1][j] ? 0 : 1;
        } else {
          obstacleGrid[i][j] = obstacleGrid[i][j] ? 0 : obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
        }
      }
    }
  
    return obstacleGrid[n - 1][m - 1];
  };
  