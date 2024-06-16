// Time:  O(n)
// Space: O(1)

class Solution {
    constructArray(n: number, k: number): number[] {
        let result: number[] = [];
        let left = 1, right = n;
        
        while (left <= right) {
            if (k % 2 === 1) {
                result.push(left++);
            } else {
                result.push(right--);
            }
            if (k > 1) {
                k--;
            }
        }
        
        return result;
    }
}
