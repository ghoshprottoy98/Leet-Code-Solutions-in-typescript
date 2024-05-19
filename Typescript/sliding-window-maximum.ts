function maxSlidingWindow(nums: number[], k: number): number[] {
    const n: number = nums.length;
    if (n * k === 0) return [];
    if (k === 1) return nums;

    let left: number[] = Array(n).fill(0);
    left[0] = nums[0];
    let right: number[] = Array(n).fill(0);
    right[0] = nums[n - 1];

    for (let i: number = 1; i < n; i++) {
        const element: number = nums[i];

        if (i % k === 0) {
            left[i] = nums[i];
        } else {
            left[i] = Math.max(left[i - 1], nums[i]);
        }

        let j: number = n - i - 1;
        if ((j + 1) % k === 0) {
            right[j] = nums[j];
        } else {
            right[j] = Math.max(right[j + 1], nums[j]);
        }
    }

    let output: number[] = [];
    for (let i: number = 0; i < n - k + 1; i++) {
        output.push(Math.max(right[i], left[i + k - 1]));
    }

    return output;
}
