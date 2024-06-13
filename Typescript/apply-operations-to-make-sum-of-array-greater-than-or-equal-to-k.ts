// Time:  O(logn)
// Space: O(1)

// math
class Solution {
    public minOperations(k: number): number {
      const ceilDivide = (a: number, b: number): number => {
        return Math.floor((a + b - 1) / b);
      };
  
      const x = Math.sqrt(k);
      return (x - 1) + (ceilDivide(k, x) - 1);
    }
  }