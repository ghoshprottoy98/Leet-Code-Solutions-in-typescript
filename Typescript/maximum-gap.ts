const maximumGap = (nums: number[]): number => {
    const len: number = nums.length;
    if (len < 2) return 0;

    let mini: number = Number.MAX_SAFE_INTEGER,
        maxi: number = Number.MIN_SAFE_INTEGER;

    nums.forEach(e => {
        if (e < mini) {
            mini = e;
        }
        if (e > maxi) {
            maxi = e;
        }
    })

    let bucketSize: number = Math.max(1, (maxi - mini) / (nums.length - 1)); // bucket size or capacity
    let bucketNum: number = Math.floor((maxi - mini) / bucketSize) + 1; // number of buckets
    const buckets: { used?: boolean, minval?: number, maxval?: number }[] = [];
    for (let index = 0; index < bucketNum; index++) {
        buckets.push({});
    }

    nums.forEach(num => {
        let bucketIdx: number = Math.floor((num - mini) / bucketSize); // locating correct bucket
        buckets[bucketIdx].used = true;
        buckets[bucketIdx].minval = Math.min(num, buckets[bucketIdx].minval || Number.MAX_SAFE_INTEGER);
        buckets[bucketIdx].maxval = Math.max(num, buckets[bucketIdx].maxval || Number.MIN_SAFE_INTEGER);
    });

    let prevBucketMax: number = mini, maxGap: number = 0;
    buckets.forEach(bucket => {
        if (bucket.used) {
            maxGap = Math.max(maxGap, bucket.minval - prevBucketMax);
            prevBucketMax = bucket.maxval;
        }
    });

    return maxGap;
}
