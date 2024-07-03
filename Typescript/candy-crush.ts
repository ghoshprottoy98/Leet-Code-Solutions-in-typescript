class Solution {
    candyCrush(board: number[][]): number[][] {
        const R = board.length;
        const C = board[0].length;
        let changed = true;

        while (changed) {
            changed = false;

            // Check for horizontal matches
            for (let r = 0; r < R; ++r) {
                for (let c = 0; c + 2 < C; ++c) {
                    const v = Math.abs(board[r][c]);
                    if (v !== 0 && v === Math.abs(board[r][c + 1]) && v === Math.abs(board[r][c + 2])) {
                        board[r][c] = board[r][c + 1] = board[r][c + 2] = -v;
                        changed = true;
                    }
                }
            }

            // Check for vertical matches
            for (let r = 0; r + 2 < R; ++r) {
                for (let c = 0; c < C; ++c) {
                    const v = Math.abs(board[r][c]);
                    if (v !== 0 && v === Math.abs(board[r + 1][c]) && v === Math.abs(board[r + 2][c])) {
                        board[r][c] = board[r + 1][c] = board[r + 2][c] = -v;
                        changed = true;
                    }
                }
            }

            // Drop the candies
            for (let c = 0; c < C; ++c) {
                let empty_r = R - 1;
                for (let r = R - 1; r >= 0; --r) {
                    if (board[r][c] > 0) {
                        board[empty_r--][c] = board[r][c];
                    }
                }
                for (let r = empty_r; r >= 0; --r) {
                    board[r][c] = 0;
                }
            }
        }

        return board;
    }
}
