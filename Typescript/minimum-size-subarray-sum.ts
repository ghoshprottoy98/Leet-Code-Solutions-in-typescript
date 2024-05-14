const minSubArrayLen = (s: number, nums: number[]): number => {
    const n: number = nums.length;
    let ans: number = Number.MAX_SAFE_INTEGER;
    let left: number = 0;
    let sum: number = 0;
    
    for (let i: number = 0; i < n; i++) {
        sum += nums[i];
        while (sum >= s) {
            ans = Math.min(ans, i + 1 - left);
            sum -= nums[left++];
        }
    }
    
    return (ans !== Number.MAX_SAFE_INTEGER) ? ans : 0;
};
