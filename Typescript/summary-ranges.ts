const summaryRanges = (nums: number[]): string[] => {
    let len: number = nums.length;
    if (!len) return [];
  
    let res: string[] = [];
    let start: number | null = null, end: number | null = null;
    for (let i: number = 0; i < len; i++) {
      const e: number = nums[i];
      if (start === null) {
        start = nums[i];
        end = nums[i];
      } else if (e === (end as number) + 1) {
        end = e;
      } else {
        res.push(getResStr(start, end));
        start = e;
        end = e;
      }
    }
  
    if (!res.length || res[res.length-1] !== getResStr(start as number, end as number)) {
      res.push(getResStr(start as number, end as number));
    }
  
    return res;
  };
  
  const getResStr = (start: number, end: number | null): string => {
    return start === end ? `${start}` : `${start}->${end === null ? start : end}`;
  }
  