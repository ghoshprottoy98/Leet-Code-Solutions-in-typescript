const reverse = (x: number): number => {
    let res = 0,
        abs = Math.abs(x),
        negative = abs === x ? false : true;

    while (abs > 0) {
        let currentVal = abs % 10;
        res = res * 10 + currentVal;
        abs = Math.floor(abs / 10);
    }

    if (res > Math.pow(2, 31)) {
        return 0;
    } else if (negative) {
        return -res;
    }

    return res;
};

// Example usage:
const num = 123;
console.log(reverse(num)); // Output: 321
