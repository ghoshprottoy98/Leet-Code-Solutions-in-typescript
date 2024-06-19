class Solution {
    public readBinaryWatch(num: number): string[] {
      const result: string[] = [];
      for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
          if (this.bitCount(h) + this.bitCount(m) === num) {
            const hour = h.toString();
            const minute = m < 10 ? `0${m}` : m.toString();
            result.push(`${hour}:${minute}`);
          }
        }
      }
      return result;
    }
  
    private bitCount(bits: number): number {
      let count = 0;
      while (bits) {
        bits &= bits - 1;
        count++;
      }
      return count;
    }
  }
  