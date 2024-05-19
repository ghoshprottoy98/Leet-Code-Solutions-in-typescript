class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root || root.val === null) {
        return 0;
    }

    let leftLeafSum = 0;

    if (root.left) {
        if (!root.left.left && !root.left.right) {
            leftLeafSum += root.left.val;
        } else {
            leftLeafSum += sumOfLeftLeaves(root.left);
        }
    }

    if (root.right) {
        leftLeafSum += sumOfLeftLeaves(root.right);
    }

    return leftLeafSum;
}
