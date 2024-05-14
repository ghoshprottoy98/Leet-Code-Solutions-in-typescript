const plusOne = (digits: number[]): number[] => {
    let carrybit: number = 1;
    const res: number[] = [];

    for (let i: number = digits.length - 1; i >= 0; i--) {
        let currentval: number = digits[i] + carrybit;
        if (currentval > 9) {
            carrybit = 1;
            currentval %= 10;
        } else {
            carrybit = 0;
        }
        res.unshift(currentval);
    }

    if (carrybit === 1) {
        res.unshift(1);
    }

    return res;
};
