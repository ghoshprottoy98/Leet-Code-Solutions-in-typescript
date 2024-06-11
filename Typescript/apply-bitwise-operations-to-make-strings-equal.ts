// Time:  O(n)
// Space: O(1)

// constructive algorithms
class Solution {
    makeStringsEqual(s: string, target: string): boolean {
        return (s.indexOf('1') !== -1) === (target.indexOf('1') !== -1);
    }
}