const insert = (intervals: number[][], newInterval: number[]): number[][] => {
    const len = intervals.length;
    if (!len) return [newInterval];
    const [start, end] = newInterval;
    const newIntervals: number[][] = [];
    
    let i = 0;
    while (i < len && start > intervals[i][0]) {
      newIntervals.push(intervals[i]);
      i++;
    }
  
    newIntervals.push(newInterval);
    while (i < len) {
      newIntervals.push(intervals[i]);
      i++;
    }
  
    console.log(newIntervals);
    const res: number[][] = [];
    i = 0;
    while (i < len + 1) {
      let [left, right] = newIntervals[i];
      while (i < len && newIntervals[i + 1][0] <= right) {
        i += 1;
        right = Math.max(newIntervals[i][1], right);
      }
      res.push([left, right]);
      i += 1;
    }
  
    return res;
  };
  