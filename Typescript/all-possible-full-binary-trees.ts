// Time:  O(n * 4^n / n^(3/2)) ~= sum of Catalan numbers from 1 .. N
// Space: O(n * 4^n / n^(3/2)) ~= sum of Catalan numbers from 1 .. N


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
    memo_: Map<number, TreeNode[]>;

    constructor() {
        this.memo_ = new Map<number, TreeNode[]>();
    }

    allPossibleFBT(N: number): TreeNode[] {
        if (!this.memo_.has(N)) {
            const result: TreeNode[] = [];
            if (N === 1) {
                result.push(new TreeNode(0));
            } else if (N % 2 === 1) {
                for (let i = 0; i < N; ++i) {
                    const leftSubtrees = this.allPossibleFBT(i);
                    const rightSubtrees = this.allPossibleFBT(N - 1 - i);
                    for (const left of leftSubtrees) {
                        for (const right of rightSubtrees) {
                            const node = new TreeNode(0);
                            node.left = left;
                            node.right = right;
                            result.push(node);
                        }
                    }
                }
            }
            this.memo_.set(N, result);
        }
        return this.memo_.get(N)!;
    }
}
