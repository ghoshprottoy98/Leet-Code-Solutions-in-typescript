// Time:  O(1)
// Space: O(1)

class Solution {
    convertToBase7(num: number): string {
        if (num < 0) {
            return '-' + this.convertToBase7(-num);
        }
        let result: string = '';
        while (num > 0) {
            result = (num % 7).toString() + result;
            num = Math.floor(num / 7);
        }
        return result === '' ? '0' : result;
    }
}

class Solution2 {
    convertToBase7(num: number): string {
        if (num < 0) {
            return '-' + this.convertToBase7(-num);
        }
        if (num < 7) {
            return num.toString();
        }
        return this.convertToBase7(Math.floor(num / 7)) + (num % 7).toString();
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.convertToBase7(100));  // Output: "202"
const solution2 = new Solution2();
console.log(solution2.convertToBase7(-7));  // Output: "-10"
