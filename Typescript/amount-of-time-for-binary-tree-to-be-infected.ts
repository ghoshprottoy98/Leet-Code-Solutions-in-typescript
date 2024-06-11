class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    amountOfTime(root: TreeNode | null, start: number): number {
        const iter_dfs = () => {
            let result = -1;
            const stk: [number, TreeNode | null, { height: number, dist_to_start: number } | null, { height: number, dist_to_start: number } | null, { height: number, dist_to_start: number }][] = [];
            stk.push([1, root, null, null, { height: -1, dist_to_start: -1 }]);
            while (stk.length) {
                const [step, curr, left, right, ret] = stk.pop()!;
                if (step === 1) {
                    if (!curr) {
                        continue;
                    }
                    const leftNode = { height: -1, dist_to_start: -1 };
                    const rightNode = { height: -1, dist_to_start: -1 };
                    stk.push([2, curr, leftNode, rightNode, ret]);
                    stk.push([1, curr.right, null, null, rightNode]);
                    stk.push([1, curr.left, null, null, leftNode]);
                } else if (step === 2) {
                    let d = -1;
                    if (curr!.val === start) {
                        d = 0;
                        result = Math.max(left!.height, right!.height) + 1;
                    } else if (left!.dist_to_start >= 0) {
                        d = left!.dist_to_start + 1;
                        result = Math.max(result, right!.height + 1 + d);
                    } else if (right!.dist_to_start >= 0) {
                        d = right!.dist_to_start + 1;
                        result = Math.max(result, left!.height + 1 + d);
                    }
                    ret.height = Math.max(left!.height, right!.height) + 1;
                    ret.dist_to_start = d;
                }
            }
            return result;
        };
        return iter_dfs();
    }
}
