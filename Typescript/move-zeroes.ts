const moveZeroes = (nums: number[]): number[] => {
    let len: number = nums.length;
    if (len < 2) return nums;
  
    const swap = (a: number, b: number): void => {
      const tmp: number = nums[a];
      nums[a] = nums[b];
      nums[b] = tmp;
    };
  
    let currZero: number = 0;
    for (let i: number = 0; i < len; i++) {
      if (nums[i]) {
        if (currZero === i) {
          currZero++;
        } else {
          swap(i, currZero++);
        }
      }
    }
  
    return nums;
  };
  