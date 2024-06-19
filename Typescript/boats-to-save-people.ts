class Solution {
    numRescueBoats(people: number[], limit: number): number {
        people.sort((a, b) => a - b);
        let result = 0;
        let left = 0, right = people.length - 1;
        while (left <= right) {
            result++;
            if (people[left] + people[right] <= limit) {
                left++;
            }
            right--;
        }
        return result;
    }
}
