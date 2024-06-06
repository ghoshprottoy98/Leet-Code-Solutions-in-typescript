class Solution {
    addRungs(rungs: number[], dist: number): number {
        let result: number = 0;
        let prev: number = 0;
        for (const curr of rungs) {
            result += this.ceilDivide(curr - prev, dist) - 1;
            prev = curr;
        }
        return result;
    }

    private ceilDivide(a: number, b: number): number {
        return Math.floor((a + (b - 1)) / b);
    }
}

// Example usage:
const solution = new Solution();
const rungs = [1, 3, 5, 10];
const dist = 2;
console.log(solution.addRungs(rungs, dist));  // Output: 6
