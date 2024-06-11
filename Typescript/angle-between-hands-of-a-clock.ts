// Time:  O(1)
// Space: O(1)

class Solution {
    angleClock(hour: number, minutes: number): number {
        const angle1: number = (hour % 12 * 60 + minutes) / 720;
        const angle2: number = minutes / 60;
        const diff: number = Math.abs(angle1 - angle2);
        return Math.min(diff, 1 - diff) * 360;
    }
}