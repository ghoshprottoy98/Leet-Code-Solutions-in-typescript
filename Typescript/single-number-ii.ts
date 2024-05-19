let singleNumber = function(nums: number[]): number {
    let len: number = nums.length;
    let ans: number = 0;

    for (let i: number = 0; i < 32; i++) {
        let tmp: number = 0;

        for (let j: number = 0; j < len; j++) {
            if ((nums[j] >> i) & 1 === 1) {
                tmp++;
            }
        }

        tmp %= 3;
        if (tmp) {
            ans |= tmp << i;
        }
    }

    return ans;
};
