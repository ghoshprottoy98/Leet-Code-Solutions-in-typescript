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
  
  const isValidBST = (root: TreeNode | null): boolean => {
    if (!root) return true;
  
    const validSubBST = (element: TreeNode, low: number | null, high: number | null): boolean => {
      if (low !== null && low >= element.val) return false;
      if (high !== null && high <= element.val) return false;
      if (!element.left && !element.right) return true;
  
      if (element.left && !validSubBST(element.left, low, element.val)) return false;
      if (element.right && !validSubBST(element.right, element.val, high)) return false;
  
      return true;
    };
  
    return validSubBST(root, null, null);
  };
  