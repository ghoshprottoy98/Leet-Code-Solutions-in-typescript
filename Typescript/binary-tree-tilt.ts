// Time:  O(n)
// Space: O(n)

// Definition for a binary tree node.
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
    findTilt(root: TreeNode | null): number {
        let tilt = 0;
        
        const postOrderTraverse = (root: TreeNode | null): number => {
            if (root === null) {
                return 0;
            }
            const left = postOrderTraverse(root.left);
            const right = postOrderTraverse(root.right);
            tilt += Math.abs(left - right);
            return left + right + root.val;
        };

        postOrderTraverse(root);
        return tilt;
    }
}
