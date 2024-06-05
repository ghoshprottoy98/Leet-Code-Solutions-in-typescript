class Solution {
    abbreviateProduct(left: number, right: number): string {
        const PREFIX_LEN = 5;
        const SUFFIX_LEN = 5;
        const MOD = Math.pow(10, PREFIX_LEN + SUFFIX_LEN);

        let curr: number = 1;
        let zeros: number = 0;
        let abbr: boolean = false;
        let decimal: number = 0.0;

        for (let i = left; i <= right; ++i, curr %= MOD) {
            curr *= i;
            decimal += Math.log10(i);
            while (curr % 10 == 0) {
                curr /= 10;
                ++zeros;
            }
            if (curr >= MOD) {
                abbr = true;
            }
        }

        if (!abbr) {
            return curr.toString() + "e" + zeros.toString();
        }

        decimal -= Math.floor(decimal);
        const prefix = Math.pow(10, decimal + (PREFIX_LEN - 1)).toString();
        const suffix = (curr % Math.pow(10, SUFFIX_LEN)).toString();
        return prefix + "..." + '0'.repeat(SUFFIX_LEN - suffix.length) + suffix + "e" + zeros.toString();
    }
}

const solution = new Solution();
console.log(solution.abbreviateProduct(1, 10));
