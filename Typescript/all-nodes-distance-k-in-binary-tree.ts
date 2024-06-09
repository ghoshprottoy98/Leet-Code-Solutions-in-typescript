// Time:  O(n)
// Space: O(n)

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    distanceK(root: TreeNode | null, target: TreeNode | null, K: number): number[] {
        const neighbors: Map<number, number[]> = new Map();
        this.dfs(null, root, neighbors);

        const bfs: number[] = [target.val];
        const lookup: Set<number> = new Set([target.val]);
        for (let i = 0; i < K; ++i) {
            const curr: number[] = [];
            for (const node of bfs) {
                const nodeNeighbors = neighbors.get(node) || [];
                for (const nei of nodeNeighbors) {
                    if (!lookup.has(nei)) {
                        curr.push(nei);
                        lookup.add(nei);
                    }
                }
            }
            bfs.splice(0, bfs.length, ...curr);
        }
        return bfs;
    }

    private dfs(parent: TreeNode | null, child: TreeNode | null, neighbors: Map<number, number[]>): void {
        if (!child) {
            return;
        }
        if (parent) {
            if (!neighbors.has(parent.val)) {
                neighbors.set(parent.val, []);
            }
            neighbors.get(parent.val)?.push(child.val);
            if (!neighbors.has(child.val)) {
                neighbors.set(child.val, []);
            }
            neighbors.get(child.val)?.push(parent.val);
        }
        this.dfs(child, child.left, neighbors);
        this.dfs(child, child.right, neighbors);
    }
}
