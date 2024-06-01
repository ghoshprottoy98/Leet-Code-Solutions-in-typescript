let checkSubarraySum = function(nums: number[], k: number): boolean {
    let map: Map<number, number> = new Map(),
        len: number = nums.length,
        sum: number = 0;

    if (len < 2) return false;
    map.set(0, -1);

    for (let i = 0; i < len; i++) {
        sum += nums[i];
        if (k !== 0) {
            sum %= k;
        }

        let preInd = map.get(sum);
        if (preInd !== undefined) {
            if (i - preInd > 1) return true;
        } else {
            map.set(sum, i);
        }
    }

    return false;
};
