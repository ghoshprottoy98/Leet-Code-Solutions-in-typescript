// Time:  O(n)
// Space: O(1)

// one-pass solution
class Solution {
    average(salary: number[]): number {
        let total = 0;
        let mi = Number.MAX_SAFE_INTEGER, ma = Number.MIN_SAFE_INTEGER;
        for (const s of salary) {
            total += s;
            mi = Math.min(mi, s);
            ma = Math.max(ma, s);
        }
        return (total - mi - ma) / (salary.length - 2);
    }
}

// Time:  O(n)
// Space: O(1)
// one-liner solution
class Solution2 {
    average(salary: number[]): number {
        return (salary.reduce((acc, s) => acc + s, 0) - 
                Math.min(...salary) - 
                Math.max(...salary)) / 
                (salary.length - 2);
    }
}
