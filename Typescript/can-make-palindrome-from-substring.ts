// Time:  O(m + n), m is the number of queries, n is the length of s
// Space: O(n)

class Solution {
    canMakePaliQueries(s: string, queries: number[][]): boolean[] {
        const CHARSET_SIZE = 26;
        const curr = new Array(CHARSET_SIZE).fill(0);
        const count = [new Array(CHARSET_SIZE).fill(0)];
        
        for (const c of s) {
            ++curr[c.charCodeAt(0) - 'a'.charCodeAt(0)];
            count.push([...curr]);
        }
        
        const result: boolean[] = [];
        for (const query of queries) {
            const [left, right, k] = query;
            let total = 0;
            for (let i = 0; i < CHARSET_SIZE; ++i) {
                total += (count[right + 1][i] - count[left][i]) % 2;
            }
            result.push(Math.floor(total / 2) <= k);
        }
        
        return result;
    }
}

// Example usage
const solution = new Solution();
const s = "abcda";
const queries = [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1]
];
console.log(solution.canMakePaliQueries(s, queries)); // [true, false, false, true, true]
