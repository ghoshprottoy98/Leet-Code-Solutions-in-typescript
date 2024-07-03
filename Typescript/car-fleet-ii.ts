class Solution {
    getCollisionTimes(cars: number[][]): number[] {
        let stk: number[] = [];
        let result: number[] = new Array(cars.length).fill(-1.0);
        
        for (let i = cars.length - 1; i >= 0; --i) {
            let p: number = cars[i][0];
            let s: number = cars[i][1];
            
            while (stk.length > 0 &&
                   (cars[stk[stk.length - 1]][1] >= s ||
                    (result[stk[stk.length - 1]] > 0 &&
                     result[stk[stk.length - 1]] <= (cars[stk[stk.length - 1]][0] - p) / (s - cars[stk[stk.length - 1]][1])))) {
                stk.pop();
            }
            
            if (stk.length > 0) {
                result[i] = (cars[stk[stk.length - 1]][0] - p) / (s - cars[stk[stk.length - 1]][1]);
            }
            
            stk.push(i);
        }
        
        return result;
    }
}

// Example usage:
const solution = new Solution();
const cars: number[][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4]
];
console.log(solution.getCollisionTimes(cars));
