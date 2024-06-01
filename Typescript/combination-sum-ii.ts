function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => b - a);
    const res: number[][] = [];
  
    const calCombs = (candis: number[], resArr: number[], targ: number): void => {
        if (!candis.length) return;
        const ele = candis[0];

        if (targ === ele) {
            res.push([...resArr, ele]);
        } else if (targ - ele > 0) {
            calCombs(candis.slice(1), [...resArr, ele], targ - ele);
        }

        let sliceIndex = 0;
        while (sliceIndex < candis.length && candis[0] === candis[sliceIndex]) {
            sliceIndex++;
        }
        calCombs(candis.slice(sliceIndex), [...resArr], targ);
    };

    calCombs(candidates, [], target);

    return res;
}
