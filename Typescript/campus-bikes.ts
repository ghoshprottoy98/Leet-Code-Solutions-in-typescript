class Solution {
    assignBikes(workers: number[][], bikes: number[][]): number[] {
        // Calculate distances
        const distances: number[][][] = new Array(workers.length);
        for (let i = 0; i < workers.length; ++i) {
            distances[i] = [];
            for (let j = 0; j < bikes.length; ++j) {
                distances[i].push([this.manhattan(workers[i], bikes[j]), i, j]);
            }
            distances[i].sort((a, b) => b[0] - a[0]); // Sort by distance descending
        }
        
        // Assign bikes
        const result: number[] = new Array(workers.length).fill(-1);
        const lookup: Set<number> = new Set();
        const minHeap: number[][] = [];
        
        for (let i = 0; i < workers.length; ++i) {
            minHeap.push(distances[i].pop());
        }
        
        while (lookup.size < workers.length) {
            const [distance, worker, bike] = minHeap.pop()!;
            if (!lookup.has(bike)) {
                result[worker] = bike;
                lookup.add(bike);
            } else {
                minHeap.push(distances[worker].pop());
            }
        }
        
        return result;
    }
    
    private manhattan(p1: number[], p2: number[]): number {
        return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
    }
}
