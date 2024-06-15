// Time:  O(nlogn)
// Space: O(1)

class Solution {
    bagOfTokensScore(tokens: number[], P: number): number {
        tokens.sort((a, b) => a - b);
        let result = 0, points = 0;
        let left = 0, right = tokens.length - 1;
        
        while (left <= right) {
            if (P >= tokens[left]) {
                P -= tokens[left++];
                result = Math.max(result, ++points);
            } else if (points > 0) {
                points--;
                P += tokens[right--];
            } else {
                break;
            }
        }
        
        return result;
    }
}
