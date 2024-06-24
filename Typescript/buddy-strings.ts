class Solution {
    buddyStrings(A: string, B: string): boolean {
        if (A.length !== B.length) {
            return false;
        }
        
        let diff: number[] = [];
        
        for (let i = 0; i < A.length; ++i) {
            if (A[i] !== B[i]) {
                diff.push(i);
                if (diff.length > 2) {
                    return false;
                }
            }
        }
        
        if (diff.length === 0) {
            // Case 1: A and B are identical, check if we can swap two characters to make identical strings
            let charSet: Set<string> = new Set(A);
            return charSet.size < A.length;
        } else if (diff.length === 2) {
            // Case 2: A and B have exactly two differences, check if swapping these two makes A equal to B
            let [i, j] = diff;
            return A[i] === B[j] && A[j] === B[i];
        } else {
            // More than 2 differences
            return false;
        }
    }
}

// Example usage:
let solution = new Solution();
console.log(solution.buddyStrings("ab", "ba")); // Output: true
console.log(solution.buddyStrings("ab", "ab")); // Output: false
console.log(solution.buddyStrings("aa", "aa")); // Output: true
console.log(solution.buddyStrings("aaaaaaabc", "aaaaaaacb")); // Output: true
console.log(solution.buddyStrings("", "aa")); // Output: false
