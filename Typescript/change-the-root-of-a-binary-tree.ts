class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    parent: Node | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class Solution {
    flipBinaryTree(root: Node | null, leaf: Node | null): Node | null {
        let curr: Node | null = leaf;
        let parent: Node | null = null;

        while (true) {
            let child: Node | null = curr!.parent;

            // Simulating nulling out parent reference
            curr!.parent = parent;

            if (curr!.left === parent) {
                curr!.left = null;
            } else {
                curr!.right = null;
            }

            if (curr === root) {
                break;
            }

            if (curr!.left) {
                curr!.right = curr!.left;
            }

            curr!.left = child;

            parent = curr;
            curr = child;
        }

        return leaf;
    }
}
