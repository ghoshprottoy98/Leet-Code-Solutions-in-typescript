class Solution {
    isArmstrong(N: number): boolean {
        const n_str = N.toString();
        return [...n_str].reduce((acc, digit) => {
            return acc + Math.pow(parseInt(digit), n_str.length);
        }, 0) === N;
    }
}
