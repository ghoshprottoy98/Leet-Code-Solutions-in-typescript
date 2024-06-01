function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const dupList: number[] = [];
    if (k === 0) return false;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (dupList.includes(element)) {
            return true;
        } else if (dupList.length === k) {
            dupList.shift();
        }

        dupList.push(element);
    }

    return false;
}

function containsNearbyDuplicate_2(nums: number[], k: number): boolean {
    const visited: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (visited[num] !== undefined && i - visited[num] <= k) {
            return true;
        }
        visited[num] = i;
    }
    return false;
}
