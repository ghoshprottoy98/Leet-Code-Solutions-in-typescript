class Solution {
    minCharacters(a: string, b: string): number {
        let count1: number[] = new Array(26).fill(0);
        let count2: number[] = new Array(26).fill(0);
        
        // Count frequencies of characters in strings a and b
        for (const c of a) {
            count1[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (const c of b) {
            count2[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        let result: number = a.length + b.length;
        
        for (let i = 0; i < 26; ++i) {
            result = Math.min(result, a.length + b.length - count1[i] - count2[i]);  // condition 3
            
            if (i > 0) {
                count1[i] += count1[i - 1];
                count2[i] += count2[i - 1];
            }
            
            if (i < 25) {
                result = Math.min(result, a.length - count1[i] + count2[i]);  // condition 1
                result = Math.min(result, b.length - count2[i] + count1[i]);  // condition 2
            }
        }
        
        return result;
    }
}
