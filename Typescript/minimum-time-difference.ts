const findMinDifference = (timePoints: string[]): number => {
    let len: number = timePoints.length;
    if (len === 1) return 0;

    let tarray: boolean[] = new Array(24 * 60),
        min: number = 1441,
        max: number = -1,
        res: number = 1441,
        prev: number = 0;

    for (let i = 0; i < len; i++) {
        let tmplist: string[] = timePoints[i].split(':'),
            minute: number = (parseInt(tmplist[0], 10) - 0) * 60 + (parseInt(tmplist[1], 10) - 0);

        if (tarray[minute]) {
            return 0;
        } else {
            tarray[minute] = true;
        }
    }

    for (let i = 0; i < 1440; i++) {
        if (tarray[i]) {
            if (min !== 1441) {
                res = Math.min(res, i - prev);
            } else {
                min = i;
            }

            max = Math.max(max, i);
            prev = i;
        }
    }

    return Math.min(res, 24 * 60 - max + min);
};
