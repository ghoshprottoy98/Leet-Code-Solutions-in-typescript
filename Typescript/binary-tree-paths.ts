// TreeNode definition (simulated in TypeScript)
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

// Solution class definition
class Solution {
    binaryTreePaths(root: TreeNode | null): string[] {
        const result: string[] = [];
        const path: TreeNode[] = [];
        this.binaryTreePathsRecu(root, path, result);
        return result;
    }

    private binaryTreePathsRecu(node: TreeNode | null, path: TreeNode[], result: string[]): void {
        if (!node) {
            return;
        }

        if (!node.left && !node.right) {
            let ans = "";
            for (const n of path) {
                ans += `${n.val}->`;
            }
            result.push(ans + node.val);
        }
            
        if (node.left) {
            path.push(node);
            this.binaryTreePathsRecu(node.left, path, result);
            path.pop();
        }

        if (node.right) {
            path.push(node);
            this.binaryTreePathsRecu(node.right, path, result);
            path.pop();
        }
    }
}

// Example usage:
function testBinaryTreePaths() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(5);

    const solution = new Solution();
    const paths = solution.binaryTreePaths(root);
    console.log(paths);
}

testBinaryTreePaths();