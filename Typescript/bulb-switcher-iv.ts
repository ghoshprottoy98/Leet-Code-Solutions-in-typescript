class Solution {
    minFlips(target: string): number {
        let result: number = 0;
        let curr: string = '0';
        
        for (const c of target) {
            if (c === curr) {
                continue;
            }
            curr = c;
            ++result;
        }
        
        return result;
    }
}
