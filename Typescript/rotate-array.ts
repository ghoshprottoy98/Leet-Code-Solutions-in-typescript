const rotate = (nums: number[], k: number): void => {
    let numslen = nums.length;
    for (let i = 0; i < k; i++) {
        let lastnode = nums.pop();
        if (lastnode !== undefined) {
            nums.unshift(lastnode);
        }
    }
};

const rotate_2 = (nums: number[], k: number): void => {
    let temp, previous;
    for (let i = 0; i < k; i++) {
        previous = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
}

const rotate_3 = (nums: number[], k: number): void => {
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let curIndex = start;
        let prevNum = nums[start];
        do {
            const nextIndex = (curIndex + k) % nums.length;
            let temp = nums[nextIndex];
            nums[nextIndex] = prevNum;
            prevNum = temp;
            curIndex = nextIndex;
            count++;
        } while (start !== curIndex);
    }
}

const rotate_4 = (nums: number[], k: number): void => {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

const reverse = (nums: number[], start: number, end: number): void => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        end--;
        start++;
    }
}
