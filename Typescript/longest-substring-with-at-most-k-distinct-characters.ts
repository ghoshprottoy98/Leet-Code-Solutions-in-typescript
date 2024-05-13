const lengthOfLongestSubstringTwoDistinct = (s: string, k: number): number => {
    const len: number = s.length;
    let start: number = 0,
      max: number = 0,
      strdict: { [key: string]: number[] } = {};
  
    for (let i = 0; i < len; i++) {
      const e: string = s[i];
  
      if (strdict[e] !== undefined) {
        strdict[e].push(i);
      } else {
        strdict[e] = [i];
      }
  
      while (Object.keys(strdict).length > k) {
        let delElement: number[] | undefined = strdict[s[start]];
  
        if (delElement && delElement.length === 1) {
          delete strdict[s[start]];
        } else if (delElement && delElement.length > 1) {
          if (delElement) delElement.shift();
        }
        start += 1;
      }
  
      max = Math.max(max, i - start + 1);
    }
  
    return max;
  };
  