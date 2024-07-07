class Solution {
    findCheapestPrice(n: number, flights: number[][], src: number, dst: number, K: number): number {
        type P = [number, number];
        let adj: Map<number, P[]> = new Map();
        
        for (const flight of flights) {
            let [u, v, w] = flight;
            if (!adj.has(u)) {
                adj.set(u, []);
            }
            adj.get(u)!.push([v, w]);
        }
        
        let best: Map<number, Map<number, number>> = new Map();
        best.set(src, new Map([[K + 1, 0]]));
        
        type T = [number, number, number];
        let minHeap: T[] = [];
        minHeap.push([0, src, K + 1]);
        
        while (minHeap.length > 0) {
            let [result, u, k] = minHeap.shift()!;
            
            if (k < 0 || (best.has(u) && best.get(u)!.has(k) && best.get(u)!.get(k)! < result)) {
                continue;
            }
            
            if (u === dst) {
                return result;
            }
            
            for (const [v, w] of (adj.get(u) || [])) {
                if (!best.has(v) || !best.get(v)!.has(k - 1) || result + w < best.get(v)!.get(k - 1)!) {
                    if (!best.has(v)) {
                        best.set(v, new Map());
                    }
                    best.get(v)!.set(k - 1, result + w);
                    minHeap.push([result + w, v, k - 1]);
                }
            }
            
            // Reorder the heap based on the first element (result)
            minHeap.sort((a, b) => a[0] - b[0]);
        }
        
        return -1;
    }
}
