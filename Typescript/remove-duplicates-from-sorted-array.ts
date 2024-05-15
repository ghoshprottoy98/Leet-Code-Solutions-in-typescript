const removeDuplicates = (nums: number[]): number => {
    let arrlen = nums.length,
        curInd = 0;

    if (arrlen < 2) {
        return arrlen;
    }

    for (let i = 1; i < arrlen; i++) {
        if (nums[curInd] !== nums[i]) {
            curInd++;
            nums[curInd] = nums[i];
        }
    }

    return curInd + 1;
};

// Example usage:
const nums = [1, 1, 2, 2, 3, 4, 5, 5];
const result = removeDuplicates(nums);
console.log(result); // Output: 5
console.log(nums.slice(0, result)); // Output: [1, 2, 3, 4, 5]
