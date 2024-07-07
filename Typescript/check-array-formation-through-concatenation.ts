class Solution {
    canFormArray(arr: number[], pieces: number[][]): boolean {
        let lookup: Map<number, number> = new Map();
        
        for (let i = 0; i < pieces.length; ++i) {
            lookup.set(pieces[i][0], i);
        }
        
        for (let i = 0; i < arr.length;) {
            if (!lookup.has(arr[i])) {
                return false;
            }
            
            for (const c of pieces[lookup.get(arr[i])!]) {
                if (i === arr.length || arr[i] !== c) {
                    return false;
                }
                ++i;
            }
        }
        
        return true;
    }
}
