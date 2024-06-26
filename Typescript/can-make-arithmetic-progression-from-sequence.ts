class Solution {
    canMakeArithmeticProgression(arr: number[]): boolean {
        const m: number = Math.min(...arr);
        const maxElement: number = Math.max(...arr);
        const d: number = (maxElement - m) / (arr.length - 1);
        
        if (d === 0) {
            return true;
        }
        
        for (let i = 0; i < arr.length;) {
            if (arr[i] === m + i * d) {
                i++;
            } else {
                const diff: number = arr[i] - m;
                if (diff % d !== 0 || diff / d >= arr.length || arr[i] === arr[diff / d]) {
                    return false;
                }
                // Swap elements arr[i] and arr[diff / d]
                [arr[i], arr[diff / d]] = [arr[diff / d], arr[i]];
            }
        }
        
        return true;
    }
}
