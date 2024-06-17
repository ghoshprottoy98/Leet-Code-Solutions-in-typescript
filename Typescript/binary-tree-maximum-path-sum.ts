/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    maxPathSum(root: TreeNode | null): number {
        return this.iter_dfs(root);
    }

    private iter_dfs(node: TreeNode | null): number {
        let result: number = -Infinity;
        const stk: (() => void)[] = [];
        const divide: (node: TreeNode | null, ret: number[]) => void = (node, ret) => {
            if (!node) {
                return;
            }
            const ret1: number[] = [0];
            const ret2: number[] = [0];
            const conquer = () => {
                result = Math.max(result, node.val + Math.max(ret1[0], 0) + Math.max(ret2[0], 0));
                ret[0] = node.val + Math.max(ret1[0], ret2[0], 0);
            };
            stk.push(() => conquer());
            stk.push(() => divide(node.right, ret2));
            stk.push(() => divide(node.left, ret1));
        };

        const max_sum: number[] = [0];
        stk.push(() => divide(node, max_sum));
        while (stk.length > 0) {
            const cb = stk.pop()!;
            cb();
        }
        return result;
    }
}
