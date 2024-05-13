const longestSubstring = (s: string, k: number): number => {
    const len = s.length;
    if (len < k) return 0;
  
    const count = (start: number, end: number): number => {
      if (end - start + 1 < k) return 0;
  
      const strdict: { [key: string]: number } = {};
      let numOfLessThanK = 0;
      for (let i = start; i <= end; i++) {
        const e = s[i];
        if (strdict[e] === undefined) {
          strdict[e] = 1;
          numOfLessThanK += 1;
        } else {
          strdict[e] += 1;
          if (strdict[e] === k) {
            numOfLessThanK -= 1;
          }
        }
      }
  
      if (!numOfLessThanK) return end - start + 1;
      while (end - start + 1 < k && strdict[s[start]] < k) {
        start++;
      }
      while (end - start + 1 < k && strdict[s[end]] < k) {
        end--;
      }
      if (end - start + 1 < k) return 0;
  
      for (let i = start; i <= end; i++) {
        const e = s[i];
        if (strdict[e] < k) {
          let next = i + 1;
          while (strdict[s[next]] < k && next < end) next++;
          return Math.max(count(start, i - 1), count(next, end));
        }
      }
  
      return end - start + 1;
    };
  
    return count(0, len - 1);
  };
  