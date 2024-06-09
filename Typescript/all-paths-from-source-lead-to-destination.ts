// Time:  O(n + e)
// Space: O(n + e)

class Solution {
    leadsToDestination(n: number, edges: number[][], source: number, destination: number): boolean {
        const children: Map<number, number[]> = new Map();
        for (const edge of edges) {
            if (!children.has(edge[0])) {
                children.set(edge[0], []);
            }
            children.get(edge[0]).push(edge[1]);
        }
        const status: Status[] = new Array(n).fill(Status.UNVISITED);
        return this.dfs(children, source, destination, status);
    }

    private dfs(children: Map<number, number[]>, node: number, destination: number, status: Status[]): boolean {
        if (status[node] === Status.DONE) {
            return true;
        }
        if (status[node] === Status.VISITING) {
            return false;
        }
        status[node] = Status.VISITING;
        if (!children.has(node) && node !== destination) {
            return false;
        }
        if (children.has(node)) {
            for (const child of children.get(node)) {
                if (!this.dfs(children, child, destination, status)) {
                    return false;
                }
            }
        }
        status[node] = Status.DONE;
        return true;
    }
}

enum Status {
    UNVISITED,
    VISITING,
    DONE
}
