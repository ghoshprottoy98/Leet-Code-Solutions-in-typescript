class Solution {
    champagneTower(poured: number, query_row: number, query_glass: number): number {
        let result: number[] = new Array(query_row + 1).fill(0);
        result[0] = poured;
        
        for (let i = 1; i <= query_row; ++i) {
            for (let j = i; j >= 0; --j) {
                result[j] = Math.max((result[j] - 1), 0) / 2 +
                            Math.max((result[j - 1] - 1), 0) / 2;
            }
        }
        
        return Math.min(result[query_glass], 1.0);
    }
}
