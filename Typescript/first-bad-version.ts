const solution = (isBadVersion: (version: number) => boolean) => {

    //  @param {number} n Total versions
    //  @return {number} The first bad version
     
    return (n: number): number => {
      if (n < 2) return n;
  
      let left = 1, right = n;
      
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
  
        if(isBadVersion(mid)) { 
          right = mid;
        } else { 
          left = mid + 1;
        }
      }
  
      return right;
    };
  };
  