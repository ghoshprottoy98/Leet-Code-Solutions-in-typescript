class Solution {
    threeSumClosest(nums: number[], target: number): number {
        nums.sort((a, b) => a - b);
        let result = 0, minDiff = Number.MAX_SAFE_INTEGER;
        for (let i = nums.length - 1; i >= 2; i--) {
            if (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                continue;
            }
            let left = 0, right = i - 1;
            while (left < right) {
                const total = nums[left] + nums[right] + nums[i];
                if (total < target) {
                    left++;
                } else if (total > target) {
                    right--;
                } else {
                    return target;
                }
                const diff = Math.abs(total - target);
                if (diff < minDiff) {
                    minDiff = diff;
                    result = total;
                }
            }
        }
        return result;
    }
}
