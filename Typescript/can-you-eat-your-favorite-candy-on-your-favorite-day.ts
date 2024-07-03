class Solution {
    canEat(candiesCount: number[], queries: number[][]): boolean[] {
        const prefix: bigint[] = new Array(candiesCount.length + 1).fill(BigInt(0));
        
        for (let i = 0; i < candiesCount.length; ++i) {
            prefix[i + 1] = prefix[i] + BigInt(candiesCount[i]);
        }

        const result: boolean[] = [];

        for (const q of queries) {
            const favoriteType = q[0];
            const favoriteDay = BigInt(q[1]);
            const dailyCap = BigInt(q[2]);
            const minCandies = favoriteDay + BigInt(1);
            const maxCandies = (favoriteDay + BigInt(1)) * dailyCap;
            const minRequired = prefix[favoriteType];
            const maxAllowed = prefix[favoriteType + 1];

            result.push(minRequired / dailyCap < minCandies && minCandies <= maxAllowed);
        }

        return result;
    }
}

// Example usage:
const solution = new Solution();
const candiesCount = [7, 4, 5, 3, 8];
const queries = [
    [0, 2, 2],
    [4, 2, 4],
    [2, 13, 1000000000]
];
console.log(solution.canEat(candiesCount, queries));
