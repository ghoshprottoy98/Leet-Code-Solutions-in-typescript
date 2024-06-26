class Solution {
    findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
        return (arrivalTime + delayedTime) % 24;
    }
}

// Example usage:
const solution = new Solution();
const arrivalTime = 10;
const delayedTime = 5;
const delayedArrivalTime = solution.findDelayedArrivalTime(arrivalTime, delayedTime);
console.log(`Delayed arrival time: ${delayedArrivalTime}`);
