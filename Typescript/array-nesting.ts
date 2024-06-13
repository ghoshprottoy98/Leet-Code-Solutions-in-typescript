class Solution {
    arrayNesting(nums: number[]): number {
        let result = 0;
        const maxInt = Number.MAX_VALUE;

        for (let num of nums) {
            if (num !== maxInt) {
                let start = num, count = 0;
                while (nums[start] !== maxInt) {
                    let temp = start;
                    start = nums[start];
                    nums[temp] = maxInt;
                    count++;
                }
                result = Math.max(result, count);
            }
        }

        return result;
    }
}
