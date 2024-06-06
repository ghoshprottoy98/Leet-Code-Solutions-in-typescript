// Time:  O(n)
// Space: O(n)

class Solution {
    addNegabinary(arr1: number[], arr2: number[]): number[] {
        const result: number[] = [];
        let carry = 0;
        let i = arr1.length - 1;
        let j = arr2.length - 1;
        
        while (i >= 0 || j >= 0 || carry) {
            if (i >= 0) {
                carry += arr1[i--];
            }
            if (j >= 0) {
                carry += arr2[j--];
            }
            result.unshift(carry & 1);
            carry = -(carry >> 1);
        }
        
        while (result.length > 1 && result[result.length - 1] === 0) {
            result.pop();
        }
        
        return result;
    }
}
