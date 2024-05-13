const majorityElement = (nums: number[]): number => {
    const len: number = nums.length;
    if (len === 1) return nums[0];
  
    const getCount = (m: number, left: number, right: number): number => {
      let count = 0;
      for (let i = left; i <= right; i++) {
        if (nums[i] === m) count += 1;
      }
      return count;
    };
  
    const getMajority = (left: number, right: number): number => {
      if (left === right) return nums[left];
      const mid = (left + right) >> 1;
  
      const leftMajority = getMajority(left, mid);
      const rightMajority = getMajority(mid + 1, right);
  
      if (leftMajority === rightMajority) return leftMajority;
  
      const lmCount = getCount(leftMajority, left, right);
      const rmCount = getCount(rightMajority, left, right);
  
      return lmCount > rmCount ? leftMajority : rightMajority;
    };
  
    return getMajority(0, len - 1);
  };
  