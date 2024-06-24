// Time:  O(n)
// Space: O(1)

class Solution {
    breakPalindrome(palindrome: string): string {
        for (let i = 0; i < Math.floor(palindrome.length / 2); ++i) {
            if (palindrome[i] !== 'a') {
                return palindrome.substring(0, i) + 'a' + palindrome.substring(i + 1);
            }
        }
        if (palindrome.length >= 2) {
            return palindrome.substring(0, palindrome.length - 1) + 'b';
        }
        return "";
    }
}
