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
    boundaryOfBinaryTree(root: TreeNode | null): number[] {
        if (!root) {
            return [];
        }

        const nodes: number[] = [];
        nodes.push(root.val);
        this.leftBoundary(root.left, nodes);
        this.leaves(root.left, nodes);
        this.leaves(root.right, nodes);
        this.rightBoundary(root.right, nodes);
        return nodes;
    }

    private leftBoundary(root: TreeNode | null, nodes: number[]): void {
        if (!root || (!root.left && !root.right)) {
            return;
        }
        nodes.push(root.val);
        if (!root.left) {
            this.leftBoundary(root.right, nodes);
        } else {
            this.leftBoundary(root.left, nodes);
        }
    }

    private rightBoundary(root: TreeNode | null, nodes: number[]): void {
        if (!root || (!root.right && !root.left)) {
            return;
        }
        if (!root.right) {
            this.rightBoundary(root.left, nodes);
        } else {
            this.rightBoundary(root.right, nodes);
        }
        nodes.push(root.val);
    }

    private leaves(root: TreeNode | null, nodes: number[]): void {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            nodes.push(root.val);
            return;
        }
        this.leaves(root.left, nodes);
        this.leaves(root.right, nodes);
    }
}
