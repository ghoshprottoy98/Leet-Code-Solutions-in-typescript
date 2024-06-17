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
    btreeGameWinningMove(root: TreeNode | null, n: number, x: number): boolean {
        const leftRight: [number, number] = [0, 0];
        this.count(root, x, leftRight);
        const [left, right] = leftRight;
        const blue = Math.max(Math.max(left, right), n - (left + right + 1));
        return blue > n - blue;
    }

    private count(root: TreeNode | null, x: number, leftRight: [number, number]): number {
        if (!root) {
            return 0;
        }
        const left = this.count(root.left, x, leftRight);
        const right = this.count(root.right, x, leftRight);
        if (root.val === x) {
            leftRight[0] = left;
            leftRight[1] = right;
        }
        return left + right + 1;
    }
}

// Example usage:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

const solution = new Solution();
console.log(solution.btreeGameWinningMove(tree, 7, 3)); // Output: true
