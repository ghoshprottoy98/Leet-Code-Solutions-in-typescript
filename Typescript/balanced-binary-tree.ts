class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function getTreeLength(root: TreeNode | null): number {
    if (!root) {
        return 0;
    } else {
        return 1 + Math.max(getTreeLength(root.left), getTreeLength(root.right));
    }
}


function isBalanced(root: TreeNode | null): boolean {
    if (!root || !root.left && !root.right) {
        return true;
    } else {
        return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getTreeLength(root.left) - getTreeLength(root.right)) <= 1;
    }
};

function getBalancedLength(root: TreeNode | null): number {
    if (!root) {
        return 0;
    } else {
        const leftLength = getBalancedLength(root.left);
        const rightLength = getBalancedLength(root.right);

        if (leftLength < 0 || rightLength < 0 || Math.abs(leftLength - rightLength) > 1) {
            return -1;
        } else {
            return Math.max(leftLength, rightLength) + 1;
        }
    }
}

function isBalanced2(root: TreeNode | null): boolean {
    if (!root || !root.left && !root.right) {
        return true;
    } else {
        return getBalancedLength(root) >= 0;
    }
};