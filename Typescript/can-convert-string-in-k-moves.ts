class Solution {
    canConvertString(s: string, t: string, k: number): boolean {
        if (s.length !== t.length) {
            return false;
        }
        
        let cnt: number[] = new Array(26).fill(0);
        
        for (let i = 0; i < s.length; ++i) {
            let diff = (26 + t.charCodeAt(i) - s.charCodeAt(i)) % 26;
            if (diff !== 0 && cnt[diff] * 26 + diff > k) {
                return false;
            }
            ++cnt[diff];
        }
        
        return true;
    }
}
