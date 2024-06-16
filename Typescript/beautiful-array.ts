// Time:  O(n)
// Space: O(n)

class Solution {
    beautifulArray(N: number): number[] {
        let result: number[] = [1];
        while (result.length < N) {
            let tmp: number[] = [];
            for (const i of result) {
                tmp.push(i * 2 - 1);
            }
            for (const i of result) {
                tmp.push(i * 2);
            }
            result = tmp;
        }
        let tmp: number[] = result;
        result = [];
        for (const i of tmp) {
            if (i <= N) {
                result.push(i);
            }
        }
        return result;
    }
}
