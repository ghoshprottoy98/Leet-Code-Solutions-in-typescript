class Solution {
    numTimesAllBlue(light: number[]): number {
        let result: number = 0;
        let right: number = 0;
        
        for (let i = 0; i < light.length; ++i) {
            right = Math.max(right, light[i]);
            result += (i + 1 === right ? 1 : 0);
        }
        
        return result;
    }
}
