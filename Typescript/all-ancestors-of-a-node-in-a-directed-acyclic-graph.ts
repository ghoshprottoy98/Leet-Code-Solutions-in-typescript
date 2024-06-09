
class Solution {
    getAncestors(n: number, edges: number[][]): number[][] {
        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const e of edges) {
            adj[e[0]].push(e[1]);
        }
        const result: number[][] = Array.from({ length: n }, () => []);
        for (let u = 0; u < n; ++u) {
            this.iter_dfs(adj, u, result);
        }
        return result;
    }

    private iter_dfs(adj: number[][], i: number, result: number[][]): void {
        const lookup: boolean[] = new Array(adj.length).fill(false);
        const stk: number[] = [i];
        while (stk.length > 0) {
            const u = stk.pop()!;
            for (const v of adj[u]) {
                if (lookup[v]) {
                    continue;
                }
                lookup[v] = true;
                stk.push(v);
                result[v].push(i);
            }
        }
    }
}

class Solution2 {
    getAncestors(n: number, edges: number[][]): number[][] {
        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const e of edges) {
            adj[e[1]].push(e[0]);
        }
        const result: number[][] = Array.from({ length: n }, () => []);
        for (let u = 0; u < n; ++u) {
            this.bfs(adj, u, result);
        }
        return result;
    }

    private bfs(adj: number[][], i: number, result: number[][]): void {
        const lookup: boolean[] = new Array(adj.length).fill(false);
        let q: number[] = [i];
        while (q.length > 0) {
            const new_q: number[] = [];
            for (const u of q) {
                for (const v of adj[u]) {
                    if (lookup[v]) {
                        continue;
                    }
                    lookup[v] = true;
                    new_q.push(v);
                    result[i].push(v);
                }
            }
            q = new_q;
        }
        result[i].sort((a, b) => a - b);
    }
}

class Solution3 {
    getAncestors(n: number, edges: number[][]): number[][] {
        const lookup: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
        const in_degree: number[] = new Array(n).fill(0);
        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const e of edges) {
            adj[e[0]].push(e[1]);
            ++in_degree[e[1]];
            lookup[e[1]].add(e[0]);
        }
        const q: number[] = [];
        for (let u = 0; u < n; ++u) {
            if (in_degree[u] === 0) {
                q.push(u);
            }
        }
        while (q.length > 0) {
            const new_q: number[] = [];
            for (const u of q) {
                for (const v of adj[u]) {
                    for (const x of lookup[u]) {
                        lookup[v].add(x);
                    }
                    if (--in_degree[v] === 0) {
                        new_q.push(v);
                    }
                }
            }
            q.splice(0, q.length, ...new_q);
        }
        const result: number[][] = [];
        for (const set of lookup) {
            const tmp: number[] = Array.from(set);
            tmp.sort((a, b) => a - b);
            result.push(tmp);
        }
        return result;
    }
}
