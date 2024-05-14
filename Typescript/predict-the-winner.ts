const PredictTheWinner = (nums: number[]): boolean => {
    const len: number = nums.length;
    const res: number[][] = new Array(len).fill([]);

    for (let i: number = len - 1; i >= 0; i--) {
        for (let j: number = i; j < len; j++) {
            if (i === j) {
                res[i] = nums[i];
            } else {
                res[j] = Math.max(nums[i] - res[j], nums[j] - res[j - 1]);
            }
        }
    }

    return res[len - 1] >= 0;
};
