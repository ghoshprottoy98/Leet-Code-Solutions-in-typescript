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
    minCameraCover(root: TreeNode | null): number {
        let result = 0;
        if (root && this.dfs(root, result) === NODE.UNCOVERED) {
            ++result;
        }
        return result;
    }

    private dfs(root: TreeNode | null, result: number): NODE {
        const COVERED = 1;
        const CAMERA = 2;
        const UNCOVERED = 0;

        if (!root) {
            return COVERED;
        }

        let left = root.left ? this.dfs(root.left, result) : COVERED;
        let right = root.right ? this.dfs(root.right, result) : COVERED;

        if (left === UNCOVERED || right === UNCOVERED) {
            ++result;
            return CAMERA;
        }
        if (left === CAMERA || right === CAMERA) {
            return COVERED;
        }
        return UNCOVERED;
    }
}

const solution = new Solution();

// Example usage:
// Constructing the example tree
let root = new TreeNode(0);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(0);
root.left.right.right = new TreeNode(0);

console.log(solution.minCameraCover(root)); // Output: 2