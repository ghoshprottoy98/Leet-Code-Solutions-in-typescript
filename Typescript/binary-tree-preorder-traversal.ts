// Time:  O(n)
// Space: O(1)

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
    preorderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];
        let curr: TreeNode | null = root;
        
        while (curr) {
            if (!curr.left) {
                res.push(curr.val);
                curr = curr.right;
            } else {
                let node: TreeNode | null = curr.left;
                while (node.right && node.right !== curr) {
                    node = node.right;
                }
                if (!node.right) {
                    res.push(curr.val);
                    node.right = curr;
                    curr = curr.left;
                } else {
                    node.right = null;
                    curr = curr.right;
                }
            }
        }
        return res;
    }
}
