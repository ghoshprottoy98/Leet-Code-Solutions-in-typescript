// Definition for a binary tree node
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
    longestConsecutive(root: TreeNode | null): number {
        let max_len = 0;
        this.longestConsecutiveHelper(root, max_len);
        return max_len;
    }

    longestConsecutiveHelper(root: TreeNode | null, max_len: number[]): number {
        if (!root) {
            return 0;
        }

        const left_len = this.longestConsecutiveHelper(root.left, max_len);
        const right_len = this.longestConsecutiveHelper(root.right, max_len);

        let cur_len = 1;
        if (root.left && root.left.val === root.val + 1) {
            cur_len = Math.max(cur_len, left_len + 1);
        }
        if (root.right && root.right.val === root.val + 1) {
            cur_len = Math.max(cur_len, right_len + 1);
        }
        max_len[0] = Math.max(max_len[0], Math.max(cur_len, Math.max(left_len, right_len)));
        return cur_len;
    }
}

// Example usage:
// Constructing a tree manually for demonstration
const root = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);

const solution = new Solution();
console.log(solution.longestConsecutive(root)); // Output: 3 (since the longest consecutive sequence is 3 -> 4 -> 5)
