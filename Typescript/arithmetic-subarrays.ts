class Solution {
    checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
        const result: boolean[] = new Array(l.length);
        for (let i = 0; i < l.length; ++i) {
            result[i] = this.isArith(nums.slice(l[i], r[i] + 1));
        }
        return result;
    }

    private isArith(nums: number[]): boolean {
        const lookup = new Set(nums);
        const mn = Math.min(...nums);
        const mx = Math.max(...nums);

        if (mx === mn) {
            return true;
        }

        if ((mx - mn) % (nums.length - 1) !== 0) {
            return false;
        }

        const d = (mx - mn) / (nums.length - 1);
        for (let i = mn; i <= mx; i += d) {
            if (!lookup.has(i)) {
                return false;
            }
        }

        return true;
    }
}
