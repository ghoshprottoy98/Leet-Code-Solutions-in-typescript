function numberOfArithmeticSlices(A: number[]): number {
    const len = A.length;
    if (len < 3) {
      return 0;
    }
  
    let res = 0;
    const interval: number[] = [];
  
    // Build the difference array
    for (let i = 1; i < len; i++) {
      interval.push(A[i] - A[i - 1]);
    }
  
    let count = 2;
    let difPre = interval[0];
  
    for (let i = 1; i < len - 1; i++) { // Iterate until second-to-last element
      const difNow = interval[i];
  
      if (difNow === difPre) {
        count++;
      } else {
        res += calculateArithmeticSlices(count); // Improved function name
        difPre = difNow;
        count = 2;
      }
    }
  
    if (count > 2) {
      res += calculateArithmeticSlices(count);
    }
  
    return res;
  }
  
  function calculateArithmeticSlices(n: number): number {
    // Calculate the number of arithmetic slices for a sequence of length n
    return (n - 2) * (n - 1) / 2;
  }
  