class Solution {
    buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
        const topologicalSort = (conditions: number[][]): number[] => {
            const adj: number[][] = new Array(k).fill(null).map(() => []);
            const inDegree: number[] = new Array(k).fill(0);
            
            for (const c of conditions) {
                const u = c[0] - 1, v = c[1] - 1;
                adj[u].push(v);
                inDegree[v]++;
            }
            
            const result: number[] = [];
            let q: number[] = [];
            
            for (let u = 0; u < k; ++u) {
                if (inDegree[u] === 0) {
                    q.push(u);
                }
            }
            
            while (q.length > 0) {
                const newQ: number[] = [];
                for (const u of q) {
                    result.push(u);
                    for (const v of adj[u]) {
                        inDegree[v]--;
                        if (inDegree[v] === 0) {
                            newQ.push(v);
                        }
                    }
                }
                q = newQ;
            }
            
            return result;
        };

        const rowOrder: number[] = topologicalSort(rowConditions);
        if (rowOrder.length !== k) {
            return [];
        }
        
        const colOrder: number[] = topologicalSort(colConditions);
        if (colOrder.length !== k) {
            return [];
        }
        
        const rowIdx: number[] = new Array(k).fill(0);
        for (let i = 0; i < k; ++i) {
            rowIdx[rowOrder[i]] = i;
        }
        
        const colIdx: number[] = new Array(k).fill(0);
        for (let i = 0; i < k; ++i) {
            colIdx[colOrder[i]] = i;
        }
        
        const result: number[][] = new Array(k).fill(null).map(() => new Array(k).fill(0));
        for (let i = 0; i < k; ++i) {
            result[rowIdx[i]][colIdx[i]] = i + 1;
        }
        
        return result;
    }
}
