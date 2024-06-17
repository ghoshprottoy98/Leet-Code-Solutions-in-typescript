class Solution {
    queryString(S: string, N: number): boolean {
        // Time complexity: O(n^2), where n is the length of S
        // Space complexity: O(1)
        
        for (let i = N; i > Math.floor(N / 2); --i) {
            // Convert i to binary string and find its substring in S
            const bin_i = i.toString(2);
            if (!S.includes(bin_i.substring(bin_i.indexOf('1')))) {
                return false;
            }
        }
        return true;
    }
}
