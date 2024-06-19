class Solution {
    public rangeBitwiseAnd(m: number, n: number): number {
      while (m < n) {
        n &= n - 1;
      }
      return n;
    }
  }
  