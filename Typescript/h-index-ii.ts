const hIndex = function(citations: number[]): number {
    const arrLen: number = citations.length;
  
    let index: number;
    for (index = arrLen - 1; index >= 0; index--) {
      const element: number = citations[index];
      
      if (element < (arrLen - index)) {
        break;
      }
    }
  
    return arrLen - index - 1;
  };
  
  const hIndex_2 = (citations: number[]): number => {
    const len: number = citations.length;
    if (len === 0 || citations[len - 1] === 0) {
        return 0;
    }
    let left: number = 0;
    let right: number = len - 1;
  
    while (left < right) {
      const mid: number = Math.floor((left + right) / 2);
      if (citations[mid] < (len - mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return len - left;
  }
  