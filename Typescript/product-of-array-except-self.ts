const productExceptSelf = (nums: number[]): number[] => {
    const res: number[] = [];
    let k = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = k;
        k = k * nums[i];
    }

    k = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= k;
        k *= nums[i];
    }

    return res;
};

// Example usage:
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
