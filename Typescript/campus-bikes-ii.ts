class Solution {
    assignBikes(workers: number[][], bikes: number[][]): number {
        const dp: number[][] = [
            Array(1 << bikes.length).fill(Number.POSITIVE_INFINITY),
            Array(1 << bikes.length).fill(Number.POSITIVE_INFINITY)
        ];
        dp[0][0] = 0;
        
        for (let i = 0; i < workers.length; ++i) {
            dp[(i + 1) % 2] = Array(1 << bikes.length).fill(Number.POSITIVE_INFINITY);
            for (let j = 0; j < bikes.length; ++j) {
                for (let taken = 0; taken < (1 << bikes.length); ++taken) {
                    if (taken & (1 << j)) {
                        continue;
                    }
                    dp[(i + 1) % 2][taken | (1 << j)] = Math.min(
                        dp[(i + 1) % 2][taken | (1 << j)],
                        dp[i % 2][taken] + this.manhattan(workers[i], bikes[j])
                    );
                }
            }
        }
        
        return Math.min(...dp[workers.length % 2]);
    }
    
    private manhattan(p1: number[], p2: number[]): number {
        return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
    }
}

class Solution2 {
    assignBikes(workers: number[][], bikes: number[][]): number {
        class PairHash<T> {
            hash(p: [T, T]): number {
                let seed = 0;
                seed ^= this.hashCode(p[0]) + 0x9e3779b9 + (seed << 6) + (seed >> 2);
                seed ^= this.hashCode(p[1]) + 0x9e3779b9 + (seed << 6) + (seed >> 2);
                return seed;
            }
            
            private hashCode(obj: T): number {
                return typeof obj.hashCode === 'function' ? obj.hashCode() : obj.toString().hashCode();
            }
        }
        
        const min_heap: number[][] = [[0, 0, 0]];
        const lookup: Set<[number, number]> = new Set();
        const pairHash = new PairHash<number>();
        
        while (min_heap.length > 0) {
            const [cost, i, taken] = min_heap.shift()!;
            
            if (lookup.has([i, taken])) {
                continue;
            }
            lookup.add([i, taken]);
            
            if (i === workers.length) {
                return cost;
            }
            
            for (let j = 0; j < bikes.length; ++j) {
                if (taken & (1 << j)) {
                    continue;
                }
                
                min_heap.push([
                    cost + this.manhattan(workers[i], bikes[j]),
                    i + 1,
                    taken | (1 << j)
                ]);
            }
            
            min_heap.sort((a, b) => a[0] - b[0]);
        }
        
        return -1;
    }
    
    private manhattan(p1: number[], p2: number[]): number {
        return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
    }
}
