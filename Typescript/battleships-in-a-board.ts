// Time:  O(m * n)
// Space: O(1)

class Solution {
    countBattleships(board: string[][]): number {
        if (board.length === 0 || board[0].length === 0) {
            return 0;
        }

        let cnt = 0;
        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < board[0].length; ++j) {
                if (board[i][j] === 'X' &&
                    (i === 0 || board[i - 1][j] !== 'X') &&
                    (j === 0 || board[i][j - 1] !== 'X')) {
                    cnt++;
                }
            }
        }
        return cnt;
    }
}
