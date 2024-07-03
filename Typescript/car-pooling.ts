class Solution {
    carPooling(trips: number[][], capacity: number): boolean {
        let lookup: Map<number, number> = new Map();
        
        for (let trip of trips) {
            let passengers = trip[0];
            let startLocation = trip[1];
            let endLocation = trip[2];
            
            if (!lookup.has(startLocation)) {
                lookup.set(startLocation, 0);
            }
            if (!lookup.has(endLocation)) {
                lookup.set(endLocation, 0);
            }
            
            lookup.set(startLocation, lookup.get(startLocation)! + passengers);
            lookup.set(endLocation, lookup.get(endLocation)! - passengers);
        }
        
        let currentCapacity = capacity;
        
        for (let [location, num] of lookup) {
            currentCapacity -= num;
            if (currentCapacity < 0) {
                return false;
            }
        }
        
        return true;
    }
}
