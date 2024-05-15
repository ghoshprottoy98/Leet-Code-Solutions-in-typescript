const removeDuplicates = (nums: number[]): number => {
    return solutionK(nums, 2);
};

const solutionK = (nums: number[], k: number): number => {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (index < k || nums[i] !== nums[index - k]) {
            nums[index++] = nums[i];
        }
    }

    return index;
};
