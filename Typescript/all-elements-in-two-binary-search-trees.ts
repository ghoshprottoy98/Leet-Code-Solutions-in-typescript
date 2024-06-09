// Time:  O(n)
// Space: O(h)


class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
        const result: number[] = [];
        const left = new Iterator<TreeNode | null>(root1);
        const right = new Iterator<TreeNode | null>(root2);

        while (left.current() !== null || right.current() !== null) {
            if (!right.current() || (left.current() && left.current()!.val < right.current()!.val)) {
                if (left.current() !== null) {
                    result.push(left.current()!.val);
                    left.next();
                }
            } else {
                if (right.current() !== null) {
                    result.push(right.current()!.val);
                    right.next();
                }
            }
        }

        return result;
    }
}

class Iterator<T> {
    stack: Array<[T | null, boolean]>;
    curr: T | null;

    constructor(root: T | null) {
        this.stack = [[root, false]];
        this.next();
    }

    next(): void {
        while (this.stack.length > 0) {
            const [root, isVisited] = this.stack.pop()!;
            if (root === null) {
                continue;
            }
            if (isVisited) {
                this.curr = root;
                return;
            }
            this.stack.push([root.right, false]);
            this.stack.push([root, true]);
            this.stack.push([root.left, false]);
        }
        this.curr = null;
    }

    current(): T | null {
        return this.curr;
    }
}
