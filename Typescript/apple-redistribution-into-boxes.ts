
// Time:  O(nlogn)
// Space: O(1)

// sort, greedy
class Solution {
    minimumBoxes(apple: number[], capacity: number[]): number {
        capacity.sort((a, b) => b - a);

        let total = apple.reduce((acc, val) => acc + val, 0);
        for (let i = 0; i < capacity.length; ++i) {
            total -= capacity[i];
            if (total <= 0) {
                return i + 1;
            }
        }
        return -1;
    }
}
