const permute = (nums: number[]): number[][] => {
    const numlen = nums.length;
    let res: number[][] = [];

    if (numlen === 0) {
        return res;
    } else if (numlen === 1) {
        res.push(nums);
        return res;
    }

    return subpermute([], nums);
};

const subpermute = (base: number[], nums: number[]): number[][] => {
    const numlen = nums.length;
    let res: number[][] = [];

    if (numlen === 1) {
        return [base.concat(nums)];
    }

    for (let i = 0; i < numlen; i++) {
        let subarray: number[] = [];
        for (let j = 0; j < numlen; j++) {
            if (i === j) {
                continue;
            }
            subarray.push(nums[j]);
        }

        let newbase = base.concat([nums[i]]);
        res = res.concat(subpermute(newbase, subarray));
    }

    return res;
};


const permute = (nums: number[]): number[][] => {
    const len = nums.length;
    if (!len) return [];
    const res: number[][] = [];

    const enumerate = (preArr: number[], candidates: number[]) => {
        if (candidates.length === 1) return res.push([...preArr, ...candidates]);

        for (let i = 0; i < candidates.length; i++) {
            const temp = candidates.slice();
            temp.splice(i, 1);
            enumerate([...preArr, candidates[i]], temp);
        }
    };

    enumerate([], nums.slice());
    return res;
};
