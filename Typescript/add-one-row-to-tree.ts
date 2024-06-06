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
    addOneRow(root: TreeNode | null, v: number, d: number): TreeNode | null {
        if (d === 0 || d === 1) {
            const node = new TreeNode(v);
            if (d === 1) {
                node.left = root;
            } else {
                node.right = root;
            }
            return node;
        }
        if (root && d >= 2) {
            root.left = this.addOneRow(root.left, v, d > 2 ? d - 1 : 1);
            root.right = this.addOneRow(root.right, v, d > 2 ? d - 1 : 0);
        }
        return root;
    }
}
