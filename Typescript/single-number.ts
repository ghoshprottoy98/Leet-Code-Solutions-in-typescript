const singleNumber = (nums: number[]): number | null => {
    const size: number = nums.length;
    let result: number = 0;

    if (!size) {
        return null;
    }

    for (let i: number = 0; i < size; i++) {
        result ^= nums[i];
    }

    return result;
};
