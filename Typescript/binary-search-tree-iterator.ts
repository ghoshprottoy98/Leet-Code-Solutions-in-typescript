class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = this.right = null;
    }
}

class BSTIterator {
    private stack: TreeNode[];

    constructor(root: TreeNode | null) {
        this.stack = [];
        this.traverseLeft(root);
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }

    next(): number {
        const node = this.stack.pop();
        if (node) {
            this.traverseLeft(node.right);
            return node.val;
        }
        throw new Error("No more elements");
    }

    private traverseLeft(node: TreeNode | null): void {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }
}

// Example usage:
// const root = new TreeNode(10); // Assuming you have a tree structure
// const i = new BSTIterator(root);
// while (i.hasNext()) console.log(i.next());
