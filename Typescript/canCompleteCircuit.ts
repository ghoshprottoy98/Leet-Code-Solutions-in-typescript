class Solution {
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let total = 0;
        let sum = 0;
        let j = -1;

        for (let i = 0; i < gas.length; ++i) {
            total += gas[i] - cost[i];
            sum += gas[i] - cost[i];
            if (sum < 0) { // find the gas station which should be the last one
                sum = 0;
                j = i;
            }
        }

        return (total >= 0) ? j + 1 : -1;
    }
}

// Example usage:
const solution = new Solution();
const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(solution.canCompleteCircuit(gas, cost)); // Output: 3
