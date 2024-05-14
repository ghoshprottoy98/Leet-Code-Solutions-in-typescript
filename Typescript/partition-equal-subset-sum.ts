let canPartition = function(nums: number[]): boolean {
    let len = nums.length,
        res = 0;
    if (len === 1) return false;

    for (let i = 0; i < len; i++) {
        res += nums[i];
    }
    if (res % 2) return false;
    res /= 2;

    let arr = new Array(res + 1);
    arr[0] = 1;
    for (let i = 1; i <= res; i++) {
        arr[i] = 0;
    }

    for (let i = 0; i < len; i++) {
        for (let j = res; j >= nums[i]; j--) {
            arr[j] += arr[j - nums[i]];
        }
        if (arr[res]) return true;
    }

    return false;
};
