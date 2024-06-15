// Time:  O(nlogn)
// Space: O(n)

class Solution {
    avoidFlood(rains: number[]): number[] {
        const lookup: { [key: number]: number[] } = {};
        for (let i = rains.length - 1; i >= 0; --i) {
            if (!(rains[i] in lookup)) {
                lookup[rains[i]] = [];
            }
            lookup[rains[i]].push(i);
        }

        const result: number[] = [];
        const minHeap: number[] = [];

        const heapPush = (heap: number[], val: number) => {
            heap.push(val);
            heap.sort((a, b) => a - b);  // Min-heap
        };

        const heapPop = (heap: number[]): number => {
            if (heap.length === 0) {
                return -1;
            }
            return heap.shift()!;
        };

        for (let i = 0; i < rains.length; ++i) {
            if (rains[i]) {
                if (lookup[rains[i]].length >= 2) {
                    lookup[rains[i]].pop();
                    heapPush(minHeap, lookup[rains[i]][lookup[rains[i]].length - 1]);
                }
                result.push(-1);
            } else if (minHeap.length > 0) {
                const j = heapPop(minHeap);
                if (j < i) {
                    return [];
                }
                result.push(rains[j]);
            } else {
                result.push(1);
            }
        }
        return minHeap.length === 0 ? result : [];
    }
}
