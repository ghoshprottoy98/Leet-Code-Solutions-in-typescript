interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  
  const maxDepth = (root: TreeNode | null): number => {
    if (!root) return 0;
  
    const getTreeDepth = (element: TreeNode | null): number => {
      if (!element) return 0;
      if (element.val !== undefined && !element.left && !element.right) return 1;
  
      return 1 + Math.max(getTreeDepth(element.left), getTreeDepth(element.right));
    };
  
    return 1 + Math.max(getTreeDepth(root.left), getTreeDepth(root.right));
  };
  