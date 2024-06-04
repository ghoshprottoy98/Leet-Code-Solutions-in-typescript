function countRangeSum(nums: number[], lower: number, upper: number): number {
    const len = nums.length;
    const v: number[] = [0];
  
    for (let i = 0; i < len; i++) {
      v.push(v[i] + nums[i]);
    }
  
    let raw_nums = v.slice();
    const copy_nums = v.slice();
  
    const merge_sort = (lo: number, hi: number, lower: number, upper: number): number => {
      if (hi - lo <= 1) return 0;
  
      let mid = lo + Math.floor((hi - lo) / 2);
      let count = merge_sort(lo, mid, lower, upper) + merge_sort(mid, hi, lower, upper);
      let right1 = mid, right2 = mid;
  
      for (let left = lo; left < mid; left++) {
        while (right1 !== hi && raw_nums[right1] - raw_nums[left] < lower) right1++;
        while (right2 !== hi && raw_nums[right2] - raw_nums[left] <= upper) right2++;
  
        count += right2 - right1;
      }
  
      // merge
      let index = lo;
      let li = lo, ri = mid;
      while (index < hi) {
        if (li === mid) {
          copy_nums[index] = raw_nums[ri++];
        } else if (ri === hi) {
          copy_nums[index] = raw_nums[li++];
        } else if (raw_nums[li] < raw_nums[ri]) {
          copy_nums[index] = raw_nums[li++];
        } else {
          copy_nums[index] = raw_nums[ri++];
        }
        index++;
      }
      
      raw_nums = copy_nums.slice();
      
      return count;
    };
  
    return merge_sort(0, v.length, lower, upper);
  }
  