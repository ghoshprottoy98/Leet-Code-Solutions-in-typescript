const intersect = (nums1: number[], nums2: number[]): number[] => {
    let p1: number = 0;
    let p2: number = 0;
    let res: number[] = [];

    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            res.push(nums1[p1]);
            p1++;
            p2++;
        } else if (nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }

    return res;
};
