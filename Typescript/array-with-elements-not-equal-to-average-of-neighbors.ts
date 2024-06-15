class Solution {
    rearrangeArray(nums: number[]): number[] {
        const mid = Math.floor((nums.length - 1) / 2);
        this.nthElement(nums, mid);  // O(n) ~ O(n^2) time
        this.reversedTriPartitionWithVI(nums, nums[mid]);  // O(n) time, O(1) space
        return nums;
    }

    private nthElement(nums: number[], n: number): void {
        // This is a simplified version of nth_element using quickselect for demonstration.
        const quickSelect = (left: number, right: number, n: number): void => {
            if (left === right) return;
            const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
            const pivotValue = nums[pivotIndex];
            [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
            let storeIndex = left;
            for (let i = left; i < right; i++) {
                if (nums[i] < pivotValue) {
                    [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
                    storeIndex++;
                }
            }
            [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
            if (n === storeIndex) return;
            else if (n < storeIndex) return quickSelect(left, storeIndex - 1, n);
            else return quickSelect(storeIndex + 1, right, n);
        };
        quickSelect(0, nums.length - 1, n);
    }

    private reversedTriPartitionWithVI(nums: number[], val: number): void {
        const N = Math.floor(nums.length / 2) * 2 + 1;
        const Nums = (i: number): number => nums[(1 + 2 * i) % N];
        for (let i = 0, j = 0, n = nums.length - 1; j <= n;) {
            if (Nums(j) > val) {
                [nums[(1 + 2 * i) % N], nums[(1 + 2 * j) % N]] = [nums[(1 + 2 * j) % N], nums[(1 + 2 * i) % N]];
                i++;
                j++;
            } else if (Nums(j) < val) {
                [nums[(1 + 2 * j) % N], nums[(1 + 2 * n) % N]] = [nums[(1 + 2 * n) % N], nums[(1 + 2 * j) % N]];
                n--;
            } else {
                j++;
            }
        }
    }
}

class Solution2 {
    rearrangeArray(nums: number[]): number[] {
        const mid = Math.floor((nums.length - 1) / 2);
        nums.sort((a, b) => a - b);  // O(nlogn) time
        const result = new Array(nums.length);  // O(n) space
        for (let i = 0, smallEnd = mid; i < nums.length; i += 2, smallEnd--) {
            result[i] = nums[smallEnd];
        }
        for (let i = 1, largeEnd = nums.length - 1; i < nums.length; i += 2, largeEnd--) {
            result[i] = nums[largeEnd];
        }
        return result;
    }
}