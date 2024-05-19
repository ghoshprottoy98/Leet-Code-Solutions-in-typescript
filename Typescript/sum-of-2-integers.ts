const getSum = (a: number, b: number): number => {
    while (b !== 0) {
        const carry = (a & b) << 1;
        a ^= b;
        b = carry;
    }
    return a;
};
