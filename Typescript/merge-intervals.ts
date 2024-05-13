const merge = (intervals: number[][]): number[][] => {
    intervals.sort((a, b) => a[0] - b[0]);
    const len: number = intervals.length;
  
    let res: number[][] = [];
    let i: number = 0;
    while (i < len) {
      let [left, right]: number[] = intervals[i];
      while (i < len - 1 && intervals[i + 1][0] <= right) {
        i += 1;
        right = Math.max(intervals[i][1], right);
      }
      res.push([left, right]);
      i += 1;
    }
  
    return res;
  };
  