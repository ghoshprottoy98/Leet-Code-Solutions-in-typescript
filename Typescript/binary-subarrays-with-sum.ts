class Solution {
    numSubarraysWithSum(A: number[], S: number): number {
        let result = 0;
        let left = 0, right = 0;
        let sum_left = 0, sum_right = 0;
        
        for (let i = 0; i < A.length; ++i) {
            // Adjust sum_left by adding current element A[i]
            sum_left += A[i];
            
            // Adjust sum_right by adding current element A[i]
            sum_right += A[i];
            
            // Slide the left pointer to the right until sum_left <= S
            while (left < i && sum_left > S) {
                sum_left -= A[left];
                left++;
            }
            
            // Slide the right pointer to the right until sum_right <= S or (sum_right == S && A[right] == 0)
            while (right < i && (sum_right > S || (sum_right === S && A[right] === 0))) {
                sum_right -= A[right];
                right++;
            }
            
            // If sum_left == S, count valid subarrays from left to right
            if (sum_left === S) {
                result += right - left + 1;
            }
        }
        
        return result;
    }
}
