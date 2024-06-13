// Time:  O(r), r is the range size of the integers
// Space: O(r)

class Solution {
    arrayPairSum(nums: number[]): number {
        const LEFT = -10000;
        const RIGHT = 10000;
        let lookup: number[] = Array(RIGHT - LEFT + 1).fill(0);
        
        for (const num of nums) {
            ++lookup[num - LEFT];
        }
        
        let r = 0, result = 0;
        for (let i = LEFT; i <= RIGHT; ++i) {
            result += Math.floor((lookup[i - LEFT] + 1 - r) / 2) * i;
            r = (lookup[i - LEFT] + r) % 2;
        }
        
        return result;
    }
}

// Time:  O(nlogn)
// Space: O(1)
class Solution2 {
    arrayPairSum(nums: number[]): number {
        nums.sort((a, b) => a - b);
        let result = 0;
        for (let i = 0; i < nums.length; i += 2) {
            result += nums[i];
        }
        return result;
    }
}
