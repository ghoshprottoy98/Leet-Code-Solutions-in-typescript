const findPeakElement = (nums: number[]): number => {
    const len: number = nums.length;
    if (len < 2) return 0;
    let left: number = 0, right: number = len - 1;

    while (left < right) {
        const mid: number = (left + right) >> 1;
        const next: number = mid + 1 >= len ? Number.MIN_SAFE_INTEGER : nums[mid + 1];

        if (nums[mid] > next) {
            right = mid;
        } else if (nums[mid] < next) {
            left = mid + 1;
        }
    }

    return left;
};