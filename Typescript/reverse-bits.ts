function reverseBits(n: number): number {
    let bits = 31;
    let divs = Math.pow(2, 31);
    let res = 0;

    for (; n !== 0;) {
        let judge = Math.floor(n / divs);
        if (judge) {
            res += Math.pow(2, 31 - bits);
        }
        n = n % divs;
        divs /= 2;
        bits -= 1;
    }

    return res;
}

// Example usage:
const num = 43261596;
const reversed = reverseBits(num);
console.log(reversed);
