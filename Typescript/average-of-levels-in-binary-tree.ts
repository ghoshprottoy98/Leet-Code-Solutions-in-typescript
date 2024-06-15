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
    public averageOfLevels(root: TreeNode | null): number[] {
      const result: number[] = [];
      if (!root) {
        return result;
      }
  
      const queue: TreeNode[] = [];
      queue.push(root);
  
      while (queue.length > 0) {
        let levelSum = 0;
        let levelCount = queue.length;
  
        for (let i = 0; i < levelCount; i++) {
          const node = queue.shift()!; // Non-null assertion as we check length
  
          levelSum += node.val;
  
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
        }
  
        result.push(levelSum / levelCount);
      }
  
      return result;
    }
  }
  