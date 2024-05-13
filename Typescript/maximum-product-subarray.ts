let maxProduct = function(nums: number[]): number {
    let len: number = nums.length;
    if (!len) {
        return 0;
    }

    let maxPre: number = nums[0];
    let maxNow: number = nums[0];
    let minPre: number = nums[0];
    for (let i: number = 1; i < len; i++) {
        let maxVal: number = Math.max(maxPre * nums[i], minPre * nums[i], nums[i]);
        let minVal: number = Math.min(minPre * nums[i], maxPre * nums[i], nums[i]);

        maxNow = Math.max(maxVal, maxNow);
        maxPre = maxVal;
        minPre = minVal;
    }

    return maxNow;
};

let maxProduct_2 = (nums: number[]): number => {
    let len: number = nums.length;
    if (!len) {
        return 0;
    }

    let maxNow: number = nums[0];
    let imax: number = 1;
    let imin: number = 1;
    for (let i: number = 0; i < len; i++) {
        if (nums[i] < 0) {
            let tmp: number = imax;
            imax = imin;
            imin = tmp;
        }

        imax = Math.max(imax * nums[i], nums[i]);
        imin = Math.min(imin * nums[i], nums[i]);
        // console.log(imax, imin, nums[i])

        maxNow = Math.max(maxNow, imax);
    }

    return maxNow;
}
