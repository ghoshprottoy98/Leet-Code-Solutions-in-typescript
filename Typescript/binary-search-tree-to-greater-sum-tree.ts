// Time:  O(n)
// Space: O(h)

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
    bstToGst(root: TreeNode | null): TreeNode | null {
        let prev = 0;
        return this.bstToGstHelper(root, prev);
    }

    private bstToGstHelper(root: TreeNode | null, prev: number): TreeNode | null {
        if (!root) {
            return root;
        }
        prev = this.bstToGstHelper(root.right, prev) || prev;
        root.val += prev;
        prev = root.val;
        prev = this.bstToGstHelper(root.left, prev) || prev;
        return root;
    }
}
