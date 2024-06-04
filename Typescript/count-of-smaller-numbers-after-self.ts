const countSmaller = (nums: number[]): number[] => {
    const len = nums.length;
    if (!len) return [];
    if (len === 1) return [0];
  
    const indexList = nums.map((_, i) => i);
    const res = nums.map(() => 0);
  
    const helper = (nums: number[], left: number, right: number, indexList: number[]): void => {
      if (left === right) {
        return;
      }
      
      const mid = left + Math.floor((right - left) / 2);
      
      // Compute left side
      helper(nums, left, mid, indexList);
      // Compute right side
      helper(nums, mid + 1, right, indexList);
    
      if (nums[indexList[mid]] < nums[indexList[mid + 1]]) return;
        
      // Merge two subsequences
      sort_and_count_smaller(nums, left, mid, right, indexList);
    }
    
    const sort_and_count_smaller = (nums: number[], left: number, mid: number, right: number, indexList: number[]): void => {
      const temp = indexList.slice();
    
      let l = left;
      let r = mid + 1;
      for (let i = l; i <= right; i++) {    
        if (l > mid) { // Left side traversed completely
          indexList[i] = temp[r];
          r += 1;
        } else if (r > right) { // Right side traversed completely
          indexList[i] = temp[l];
          l += 1;
          res[indexList[i]] += (right - mid);
        } else if (nums[temp[l]] <= nums[temp[r]]) { 
          indexList[i] = temp[l];
          l += 1;
          res[indexList[i]] += (r - mid - 1);
        } else {
          indexList[i] = temp[r];
          r += 1;
        }
      }
    }
  
    helper(nums, 0, len - 1, indexList);
    return res;
  };
  