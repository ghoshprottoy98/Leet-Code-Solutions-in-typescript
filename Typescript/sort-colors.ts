// One-pass solution using swapping
function sortColors(nums: number[]): void {
    let begin = 0;
    let end = nums.length - 1;

    for (let i = 0; i <= end; i++) {
        const currentVal = nums[i];
        switch (currentVal) {
            case 0:
                [nums[i], nums[begin]] = [nums[begin], nums[i]];
                begin++;
                break;
            case 2:
                [nums[i], nums[end]] = [nums[end], nums[i]];
                end--;
                i--; // Recheck the swapped element
                break;
            default:
                break;
        }
    }
}

// One-pass solution using counting
function sortColors(nums: number[]): void {
    let count0 = 0;
    let count1 = 0;

    for (const num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (i < count0) nums[i] = 0;
        else if (i < count0 + count1) nums[i] = 1;
        else nums[i] = 2;
    }
}

// Traditional two-pass solution
function sortColors(nums: number[]): void {
    let count0 = 0;
    let count1 = 0;

    for (const num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (i < count0) nums[i] = 0;
        else if (i < count0 + count1) nums[i] = 1;
        else nums[i] = 2;
    }
}
