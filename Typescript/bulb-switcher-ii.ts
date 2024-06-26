class Solution {
    flipLights(n: number, m: number): number {
        if (m === 0)           return 1;
        if (n === 1)           return 2;
        if (m === 1 && n === 2) return 3;
        if (m === 1 || n === 2) return 4;
        if (m === 2)           return 7;
        return 8;
    }
}
