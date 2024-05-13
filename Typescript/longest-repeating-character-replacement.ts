const characterReplacement = (s: string, k: number): number => {
    const len: number = s.length;
    let max: number = 0;
    let strdict: { [key: string]: number } = {};
    let left: number = 0,
      right: number = 0;
  
    for (; right < len; right++) {
      const e: string = s[right];
  
      if (strdict[e] !== undefined) {
        strdict[e] += 1;
      } else {
        strdict[e] = 1;
      }
  
      let curMaxStr: string = '';
      Object.keys(strdict).map((ele) => {
        if (strdict[ele] > (strdict[curMaxStr] || 0)) {
          curMaxStr = ele;
        }
      });
  
      while (right - left + 1 - strdict[curMaxStr] > k) {
        strdict[s[left]] -= 1;
        left += 1;
  
        Object.keys(strdict).map((ele) => {
          if (strdict[ele] > strdict[curMaxStr]) {
            curMaxStr = ele;
          }
        });
      }
  
      max = Math.max(max, right - left + 1);
    }
  
    return max;
  };
  