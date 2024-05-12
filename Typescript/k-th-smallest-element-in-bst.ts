const getTreeList = (root: TreeNode | null): number[] => {
    if (!root) {
        return [];
    }

    const result = [];

    result.push(...getTreeList(root.left));
    result.push(root.val);
    result.push(...getTreeList(root.right));

    return result;
}

function kthSmallest(root: TreeNode | null, k: number): number {
    const result = getTreeList(root);

    return result[k-1];
};