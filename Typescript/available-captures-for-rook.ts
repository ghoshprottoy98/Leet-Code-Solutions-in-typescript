// Time:  O(1)
// Space: O(1)

class Solution {
    public numRookCaptures(board: Array<Array<string>>): number {
      const directions: Array<[number, number]> = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
      let rookRow: number = -1;
      let rookCol: number = -1;
  
      for (let i = 0; i < 8 && rookRow === -1; i++) {
        for (let j = 0; j < 8; j++) {
          if (board[i][j] === 'R') {
            rookRow = i;
            rookCol = j;
            break;
          }
        }
      }
  
      let result = 0;
      for (const [dr, dc] of directions) {
        let nr = rookRow + dr;
        let nc = rookCol + dc;
  
        while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          if (board[nr][nc] === 'p') {
            result++;
          }
          if (board[nr][nc] !== '.') {
            break;
          }
          nr += dr;
          nc += dc;
        }
      }
  
      return result;
    }
  }
  