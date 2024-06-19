class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(x: number) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    postorderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];
        const dummy = new TreeNode(Number.MIN_SAFE_INTEGER);
        dummy.left = root;
        let cur: TreeNode | null = dummy;

        while (cur !== null) {
            if (cur.left === null) {
                cur = cur.right;
            } else {
                let node: TreeNode | null = cur.left;
                while (node.right !== null && node.right !== cur) {
                    node = node.right;
                }
                if (node.right === null) {
                    node.right = cur;
                    cur = cur.left;
                } else {
                    const v = this.traceBack(cur.left, node);
                    res.push(...v);
                    node.right = null;
                    cur = cur.right;
                }
            }
        }
        return res;
    }

    private traceBack(from: TreeNode | null, to: TreeNode): number[] {
        const res: number[] = [];
        let cur: TreeNode | null = from;
        while (cur !== to) {
            res.push(cur!.val);
            cur = cur!.right;
        }
        res.push(to.val);
        res.reverse();
        return res;
    }
}
