class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function sumNumbers(root: TreeNode | null): number {
    let totalSum = 0;

    const dfs = (node: TreeNode | null, currentSum: number) => {
        if (!node) return;

        const newSum = currentSum * 10 + node.val;

        if (!node.left && !node.right) {
            totalSum += newSum;
            return;
        }

        dfs(node.left, newSum);
        dfs(node.right, newSum);
    }

    dfs(root, 0);

    return totalSum;
}
