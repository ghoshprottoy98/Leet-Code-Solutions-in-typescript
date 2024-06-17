// Time:  O(1), amortized
// Space: O(h)

/**
 * Definition for a binary tree node.
 */
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

class BSTIterator {
    private stk_: TreeNode[] = [];
    private vals_: number[] = [];
    private pos_: number = -1;

    constructor(root: TreeNode | null) {
        this.traverseLeft(root);
    }

    hasNext(): boolean {
        return this.pos_ + 1 !== this.vals_.length || this.stk_.length !== 0;
    }

    next(): number {
        if (++this.pos_ === this.vals_.length) {
            const node = this.stk_.pop()!;
            this.traverseLeft(node.right);
            this.vals_.push(node.val);
        }
        return this.vals_[this.pos_];
    }

    hasPrev(): boolean {
        return this.pos_ - 1 >= 0;
    }

    prev(): number {
        return this.vals_[--this.pos_];
    }

    private traverseLeft(node: TreeNode | null) {
        while (node !== null) {
            this.stk_.push(node);
            node = node.left;
        }
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * const obj = new BSTIterator(root);
 * const param_1 = obj.hasNext();
 * const param_2 = obj.next();
 * const param_3 = obj.hasPrev();
 * const param_4 = obj.prev();
 */
