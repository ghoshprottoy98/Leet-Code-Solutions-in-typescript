class Solution {
    minimumBoxes(n: number): number {
        // find max h s.t. h*(h+1)*(h+2)//6 <= n
        let h = Math.floor(Math.pow(6 * n, 1/3));
        if (h * (h + 1) * (h + 2) / 6 > n) {
            --h;
        }
        n -= h * (h + 1) * (h + 2) / 6;
        let d = Math.ceil((-1 + Math.sqrt(1 + 8 * n)) / 2); // find min d s.t. d*(d+1)//2 >= n
        return h * (h + 1) / 2 + d;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.minimumBoxes(10));  // Example input
