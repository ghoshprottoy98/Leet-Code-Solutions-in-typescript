// Time:  O(n!)
// Space: O(n)

class Solution {
    countArrangement(N: number): number {
        let arrangement: number[] = Array.from({ length: N }, (_, i) => i + 1);
        return this.countArrangementHelper(N, arrangement);
    }

    private countArrangementHelper(n: number, arrangement: number[]): number {
        if (n <= 0) {
            return 1;
        }
        let count = 0;
        for (let i = 0; i < n; ++i) {
            if (arrangement[i] % n === 0 || n % arrangement[i] === 0) {
                [arrangement[i], arrangement[n - 1]] = [arrangement[n - 1], arrangement[i]]; // swap
                count += this.countArrangementHelper(n - 1, arrangement);
                [arrangement[i], arrangement[n - 1]] = [arrangement[n - 1], arrangement[i]]; // swap back
            }
        }
        return count;
    }
}
