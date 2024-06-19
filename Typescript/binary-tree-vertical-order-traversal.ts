// Time:  O(n)
// Space: O(n)

// Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Solution {
    verticalOrder(root: TreeNode | null): number[][] {
        if (root === null) {
            return [];
        }

        const cols: Map<number, number[]> = new Map();
        const queue: [TreeNode, number][] = [[root, 0]];

        for (let i = 0; i < queue.length; ++i) {
            const [node, j] = queue[i];
            if (node) {
                if (!cols.has(j)) {
                    cols.set(j, []);
                }
                cols.get(j)!.push(node.val);
                if (node.left) {
                    queue.push([node.left, j - 1]);
                }
                if (node.right) {
                    queue.push([node.right, j + 1]);
                }
            }
        }

        let min_idx = Number.MAX_SAFE_INTEGER;
        let max_idx = Number.MIN_SAFE_INTEGER;

        for (const key of cols.keys()) {
            min_idx = Math.min(min_idx, key);
            max_idx = Math.max(max_idx, key);
        }

        const res: number[][] = [];
        for (let i = min_idx; i <= max_idx; ++i) {
            if (cols.has(i)) {
                res.push(cols.get(i)!);
            }
        }

        return res;
    }
}