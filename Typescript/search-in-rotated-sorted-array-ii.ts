const search = (nums: number[], target: number): boolean => {
    const len: number = nums.length;
  
    if (nums[0] === nums[len - 1]) {
      if (nums[0] === target) return true;
      else {
        let index: number | false = false;
        nums.map((e: number, i: number) => {
          if (e === target) index = i;
        });
        if (index) return true;
      }
    } else {
      return subsearch(nums, target);
    }
  
    return false;
  };
  
  const subsearch = (nums: number[], target: number): boolean => {
    let lo: number = 0, hi: number = nums.length - 1;
  
    while (lo < hi) {
      let mid: number = (lo + hi) >> 1;
  
      if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
        lo = mid + 1;
      } else if (target < nums[0] && target > nums[mid]) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
  
    return lo === hi && nums[lo] === target;
  };
  