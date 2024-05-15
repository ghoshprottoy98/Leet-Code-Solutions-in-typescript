const inorder = (root: TreeNode | null, nums: number[]) => {
    if (!root) {
        return ;
    }

    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
}

const findSwapTwoNums = (root: TreeNode | null, nums: number[]) => {
    let x = -1, y = -1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            y = i;

            if (x === -1) {
                x = i-1;
            } else {
                break;
            }
        }
    }

    return [nums[x], nums[y]];
}

const recover = (root: TreeNode | null, index: number, x: number, y: number) => {
    if (!root || index === 0) {
        return ;
    }

    if ([x, y].includes(root.val)) {
        root.val = root.val === x ? y : x;
        index--;
    }

    recover(root.left, index, x, y);
    recover(root.right, index, x, y);
}


function recoverTree(root: TreeNode | null): void {
    const nums: number[] = [];

    inorder(root, nums);
    const [x, y] = findSwapTwoNums(root, nums);
    recover(root, 2, x, y);
};