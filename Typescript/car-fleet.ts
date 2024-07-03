class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars: [number, number][] = [];
        
        // Populate the cars array with position and time to reach target
        for (let i = 0; i < position.length; ++i) {
            cars.push([position[i], (target - position[i]) / speed[i]]);
        }
        
        // Sort cars based on their positions
        cars.sort((a, b) => a[0] - b[0]);
        
        let result = 0;
        let curr = 0;
        
        // Calculate number of car fleets
        for (let i = position.length - 1; i >= 0; --i) {
            if (cars[i][1] > curr) {
                curr = cars[i][1];
                ++result;
            }
        }
        
        return result;
    }
}
