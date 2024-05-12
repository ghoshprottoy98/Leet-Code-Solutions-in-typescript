const intersection = (nums1: number[], nums2: number[]): number[] => {
    const num1set: Set<number> = new Set(nums1);
    const num2set: Set<number> = new Set(nums2);
    const res: number[] = [];
  
    num1set.forEach(e => num2set.has(e) ? res.push(e) : null);
  
    return res;
  };
  