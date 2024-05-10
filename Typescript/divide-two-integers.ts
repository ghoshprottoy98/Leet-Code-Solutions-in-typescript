const divide = (dividend: number, divisor: number): number => {
    const MIN_INT = -2147483648;
    const MAX_INT = 2147483647;
    let positive = 0;

    if (!divisor || (dividend === MIN_INT && divisor === -1)) {
        return MAX_INT;
    }

    let res = 0;
    if (dividend < 0) {
        dividend = -dividend;
        positive += 1;
    }
    if (divisor < 0) {
        divisor = -divisor;
        positive += 1;
    }

    while (dividend >= divisor) {
        let tmpres = 1, tmpdiv = divisor;

        while ((dividend >> 1) >= tmpdiv) {
            tmpres <<= 1;
            tmpdiv <<= 1;
        }
        res += tmpres;
        dividend -= tmpdiv;
    }

    if (positive === 1) {
        return -res;
    }

    return res;
};
