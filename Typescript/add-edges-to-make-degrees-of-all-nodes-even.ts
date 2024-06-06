// Time:  O(n)
// Space: O(n)

class Solution {
    isPossible(n: number, edges: number[][]): boolean {
        const adj: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
        
        for (const e of edges) {
            adj[e[0] - 1].add(e[1] - 1);
            adj[e[1] - 1].add(e[0] - 1);
        }
        
        const odds: number[] = [];
        
        for (let u = 0; u < n; ++u) {
            if (adj[u].size % 2 !== 0) {
                odds.push(u);
            }
        }
        
        if (odds.length === 0) {
            return true;
        }
        
        if (odds.length === 2) {
            for (let u = 0; u < n; ++u) {
                if (!adj[u].has(odds[0]) && !adj[u].has(odds[1])) {
                    return true;
                }
            }
            return false;
        }
        
        if (odds.length === 4) {
            return ((!adj[odds[1]].has(odds[0]) && !adj[odds[3]].has(odds[2])) ||
                    (!adj[odds[2]].has(odds[0]) && !adj[odds[3]].has(odds[1])) ||
                    (!adj[odds[3]].has(odds[0]) && !adj[odds[2]].has(odds[1])));
        }
        
        return false;
    }
}
