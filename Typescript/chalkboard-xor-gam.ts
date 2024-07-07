class Solution {
    xorGame(nums: number[]): boolean {
        return nums.reduce((acc, num) => acc ^ num, 0) === 0 ||
               nums.length % 2 === 0;
    }
}
