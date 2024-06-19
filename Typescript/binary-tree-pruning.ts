// Time:  O(n)
// Space: O(h)

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
    pruneTree(root: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }
        root.left = this.pruneTree(root.left);
        root.right = this.pruneTree(root.right);
        if (!root.left && !root.right && root.val === 0) {
            return null;
        }
        return root;
    }
}