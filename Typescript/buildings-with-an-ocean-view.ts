// Time:  O(n)
// Space: O(n)

class Solution {
    findBuildings(heights: number[]): number[] {
        const result: number[] = [];
        for (let i = 0; i < heights.length; ++i) {
            while (result.length > 0 && heights[result[result.length - 1]] <= heights[i]) {
                result.pop();
            }
            result.push(i);
        }
        return result;
    }
}

// Time:  O(n)
// Space: O(1)

class Solution2 {
    findBuildings(heights: number[]): number[] {
        const result: number[] = [];
        for (let i = heights.length - 1; i >= 0; --i) {
            if (result.length === 0 || heights[i] > heights[result[result.length - 1]]) {
                result.push(i);
            }
        }
        return result.reverse();
    }
}
