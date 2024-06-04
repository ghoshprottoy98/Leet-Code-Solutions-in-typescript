class Solution {
    find132pattern(nums: number[]): boolean {
        let ak: number = Number.MIN_SAFE_INTEGER;
        let stk: number[] = [];
        for (let i: number = nums.length - 1; i >= 0; --i) {
            if (nums[i] < ak) {
                return true;
            }
            while (stk.length > 0 && stk[stk.length - 1] < nums[i]) {
                ak = stk.pop()!;
            }
            stk.push(nums[i]);
        }
        return false;
    }
}
