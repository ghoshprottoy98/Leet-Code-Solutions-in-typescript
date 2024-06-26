class Solution {
    bulbSwitch(n: number): number {
        // The number of full squares.
        return Math.floor(Math.sqrt(n));
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.bulbSwitch(10)); 