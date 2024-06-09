
// Time:  O(n)
// Space: O(1)

class Solution {
    alphabetBoardPath(target: string): string {
      let result = '';
      let x = 0, y = 0;
      for (const c of target) {
        const x1 = (c.charCodeAt(0) - 'a'.charCodeAt(0)) % 5;
        const y1 = Math.floor((c.charCodeAt(0) - 'a'.charCodeAt(0)) / 5);
        result += 'U'.repeat(Math.max(y - y1, 0));
        result += 'L'.repeat(Math.max(x - x1, 0));
        result += 'R'.repeat(Math.max(x1 - x, 0));
        result += 'D'.repeat(Math.max(y1 - y, 0));
        result += '!';
        x = x1;
        y = y1;
      }
      return result;
    }
  }
  
  // Example usage:
  const sol = new Solution();
  const result = sol.alphabetBoardPath("leet");
  console.log(result); // Output the result
  