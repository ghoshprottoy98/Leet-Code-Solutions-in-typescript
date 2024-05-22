function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const numlen: number = nums.length;
    const end: number = nums[numlen - 1];
    const eInd: number = numlen - 2;
    const res: number[][] = [];

    if (numlen < 3 || nums[0] > 0 || end < 0) {
        return [];
    }

    for (let i = 0; i < eInd; i++) {
        const revi: number = -nums[i];
        let j: number = i + 1;
        let k: number = numlen - 1;

        if (revi < 0) {
            break;
        }

        while (j < k) {
            const norj: number = nums[j];
            const nork: number = nums[k];

            if (norj + nork > revi) {
                k--;
            } else if (norj + nork < revi) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);

                // Forbid duplicated numbers
                while (j + 1 < numlen && nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                k--;
                j++;
            }
        }

        while (i + 1 < numlen && nums[i] === nums[i + 1]) i++;
    }

    return res;
}
