// Time:  O(p + r * n), p is the count of all the possible paths in graph,
//                      r is the count of the result.
// Space: O(n)

class Solution {
    allPathsSourceTarget(graph: number[][]): number[][] {
        const result: number[][] = [];
        const path: number[] = [0];
        this.dfs(graph, 0, path, result);
        return result;
    }

    private dfs(graph: number[][], curr: number, path: number[], result: number[][]): void {
        if (curr === graph.length - 1) {
            result.push([...path]);
            return;
        }
        for (const node of graph[curr]) {
            path.push(node);
            this.dfs(graph, node, path, result);
            path.pop();
        }
    }
}
