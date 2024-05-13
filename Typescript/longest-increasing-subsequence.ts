const lengthOfLIS = (nums: number[]): number => {
    const len: number = nums.length;
    if (len < 2) return len;
  
    const res: number[] = nums.map(() => 1);
  
    for (let i: number = 0; i < len; i++) {
      for (let j: number = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          res[i] = Math.max(res[i], res[j] + 1);
        }
      }
    }
  
    let max: number = res[0];
    res.map((e: number) => (e > max ? (max = e) : null));
    return max;
  };
  
  const lengthOfLIS_2 = (nums: number[]): number => {
    let tails: number[] = nums.map(() => 0),
      res: number = 0;
  
    nums.map((num: number) => {
      let i: number = 0,
        j: number = res;
  
      while (i < j) {
        const m: number = (i + j) >> 1;
        if (tails[m] < num) {
          i = m + 1;
        } else {
          j = m;
        }
      }
  
      tails[i] = num;
      if (j === res) {
        res += 1;
      }
    });
  
    return res;
  };