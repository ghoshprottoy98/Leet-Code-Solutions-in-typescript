class NumArray {
    nums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
    }

    update(i: number, val: number): void {
        this.nums[i] = val;
    }

    sumRange(i: number, j: number): number {
        let sum = 0;
        for (let ind = i; ind <= j; ind++) {
            sum += this.nums[ind];
        }

        return sum;
    }
}

// Example usage:
const nums = [1, 3, 5];
const obj = new NumArray(nums);
console.log(obj.sumRange(0, 2)); // Output: 9
obj.update(1, 2);
console.log(obj.sumRange(0, 2)); // Output: 8
