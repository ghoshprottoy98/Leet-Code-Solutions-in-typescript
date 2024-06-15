// Time:  O(n)
// Space: O(1)

class Solution {
    averageWaitingTime(customers: number[][]): number {
        let avai = 0;
        let wait = 0;
        for (const c of customers) {
            avai = Math.max(avai, c[0]) + c[1];
            wait += avai - c[0];
        }
        return wait / customers.length;
    }
}
