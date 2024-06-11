
// Time: O(nlogn)
// Space: O(n)

class Solution {
    minimalKSum(nums: number[], k: number): number {
        let result: number = (k * (k + 1)) / 2;
        let curr: number = k + 1;
        const numSet: Set<number> = new Set(nums);

        for (const x of numSet) {
            if (x < curr) {
                result += curr++ - x;
            }
        }

        return result;
    }
}

// Time: O(nlogn)
// Space: O(n)

class Solution2 {
    minimalKSum(nums: number[], k: number): number {
        let result: number = 0;
        let prev: number = 0;
        nums.push(Number.MAX_SAFE_INTEGER);
        const numSet: Set<number> = new Set(nums);

        for (const x of numSet) {
            if (!k) {
                break;
            }

            const cnt: number = Math.min((x - 1) - prev, k);
            k -= cnt;
            result += ((prev + 1) + (prev + cnt)) * cnt / 2;
            prev = x;
        }

        return result;
    }
}
