// Time:  O(n)
// Space: O(1)

class Solution {
    canPlaceFlowers(flowerbed: number[], n: number): boolean {
        for (let i = 0; i < flowerbed.length; ++i) {
            if (flowerbed[i] === 0 &&
                (i === 0 || flowerbed[i - 1] === 0) &&
                (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                flowerbed[i] = 1;
                --n;
            }
            if (n <= 0) {
                return true;
            }
        }
        return false;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true
console.log(solution.canPlaceFlowers([1, 0, 0, 0, 1], 2)); // Output: false
