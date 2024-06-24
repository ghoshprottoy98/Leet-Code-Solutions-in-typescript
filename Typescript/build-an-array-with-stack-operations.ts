class Solution {
    buildArray(target: number[], n: number): string[] {
        let result: string[] = [];
        let curr = 1;
        
        for (const t of target) {
            for (let i = curr; i < t; ++i) {
                result.push("Push");
                result.push("Pop");
            }
            result.push("Push");
            curr = t + 1;
        }
        
        return result;
    }
}
