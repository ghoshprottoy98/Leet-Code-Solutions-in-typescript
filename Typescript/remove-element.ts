
const removeElement = (nums: number[], val: number): number => {
    let curIndex = 0;
    const arrLen = nums.length;
    
    for (let i = 0; i < arrLen; i++) {
        if (nums[i] !== val) {
            nums[curIndex++] = nums[i];
        }
    }
    
    return curIndex;
};

// Example usage:
const nums: number[] = [3, 2, 2, 3];
const val: number = 3;
const result: number = removeElement(nums, val);
console.log(result); // Output: 2
