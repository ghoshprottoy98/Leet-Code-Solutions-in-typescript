const findKthLargest = (nums: number[], k: number): number => {
    const len: number = nums.length;
    const target: number = len - k;
    let left: number = 0,
      right: number = len - 1;
  
    const swap = (a: number, b: number): void => {
      const temp: number = nums[a];
      nums[a] = nums[b];
      nums[b] = temp;
    };
  
    const partition = (start: number, end: number): number => {
      const pivot: number = nums[left];
      let lindex: number = left;
  
      for (let i = left + 1; i <= end; i++) {
        const element: number = nums[i];
        if (element < pivot) {
          swap(++lindex, i);
        }
      }
  
      swap(lindex, left);
      return lindex;
    };
  
    while (true) {
      let index: number = partition(left, right);
      if (index === target) {
        return nums[index];
      } else if (index < target) {
        left = index + 1;
      } else {
        right = index - 1;
      }
    }
  };
  