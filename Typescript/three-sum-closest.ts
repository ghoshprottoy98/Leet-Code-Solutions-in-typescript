function threeSumClosest(nums: number[], target: number): number {
    let len: number = nums.length;

    if (len < 3) {
        return nums.reduce(reduceArray, 0);
    }
    nums.sort(compareNumbers);

    function compareNumbers(a: number, b: number): number {
        return a - b;
    }

    function reduceArray(a: number, b: number): number {
        return a + b;
    }

    let res: number = nums[0] + nums[1] + nums[2];
    for (let i: number = 0; i < len - 2; i++) {
        let j: number = i + 1,
            k: number = len - 1;

        while (j < k) {
            let sum: number = nums[i] + nums[j] + nums[k];
            if (Math.abs(res - target) > Math.abs(sum - target)) {
                if (sum === target) return target;
                res = sum;
            }

            if (sum > target) {
                k--;
            } else {
                j++;
            }
        }
    }

    return res;
}
