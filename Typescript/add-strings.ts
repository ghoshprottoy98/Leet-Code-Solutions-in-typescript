
// Time:  O(n)
// Space: O(1)

class Solution {
    addStrings(num1: string, num2: string): string {
        let result: string = '';

        for (let i = num1.length - 1, j = num2.length - 1, carry = 0;
             i >= 0 || j >= 0 || carry;
             carry = Math.floor(carry / 10)) {

            if (i >= 0) {
                carry += parseInt(num1[i--]);
            }
            if (j >= 0) {
                carry += parseInt(num2[j--]);
            }
            result += (carry % 10).toString();
        }
        return result.split('').reverse().join('');
    }
}
