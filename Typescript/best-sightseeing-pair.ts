class Solution {
    public maxScoreSightseeingPair(A: number[]): number {
      let result = 0;
      let curr = 0;
  
      for (const x of A) {
        result = Math.max(result, curr + x);
        curr = Math.max(curr, x) - 1;
      }
  
      return result;
    }
  }
  