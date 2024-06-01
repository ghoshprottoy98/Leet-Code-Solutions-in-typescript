interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  
  const sortedArrayToBST = (nums: number[]): TreeNode | null => {
    const len = nums.length;
    if (!len) return null;
  
    const treeNode = (left: number, right: number): TreeNode | null => {
      if (left > right) return null;
      const mid = (left + right) >> 1;
  
      const node: TreeNode = {
        val: nums[mid],
        left: null,
        right: null
      };
  
      node.left = treeNode(left, mid - 1);
      node.right = treeNode(mid + 1, right);
  
      return node;
    };
  
    return treeNode(0, len - 1);
  };
  